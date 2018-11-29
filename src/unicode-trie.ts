import inflate from './tiny-inflate';

const SHIFT_1 = 6 + 5;
const SHIFT_2 = 5;
const SHIFT_1_2 = SHIFT_1 - SHIFT_2;
const OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> SHIFT_1;
const INDEX_2_BLOCK_LENGTH = 1 << SHIFT_1_2;
const INDEX_2_MASK = INDEX_2_BLOCK_LENGTH - 1;
const INDEX_SHIFT = 2;
const DATA_BLOCK_LENGTH = 1 << SHIFT_2;
const DATA_MASK = DATA_BLOCK_LENGTH - 1;
const LSCP_INDEX_2_OFFSET = 0x10000 >> SHIFT_2;
const LSCP_INDEX_2_LENGTH = 0x400 >> SHIFT_2;
const INDEX_2_BMP_LENGTH = LSCP_INDEX_2_OFFSET + LSCP_INDEX_2_LENGTH;
const UTF8_2B_INDEX_2_OFFSET = INDEX_2_BMP_LENGTH;
const UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6;
const INDEX_1_OFFSET = UTF8_2B_INDEX_2_OFFSET + UTF8_2B_INDEX_2_LENGTH;
const DATA_GRANULARITY = 1 << INDEX_SHIFT;

/**
 * FIXME
 */
export default class UnicodeTrie {
  highStart: number;
  errorValue: number;
  data: Uint32Array;

  constructor(data: Uint8Array) {
    const view = new DataView(data.buffer);
    this.highStart = view.getUint32(0);
    this.errorValue = view.getUint32(4);
    const uncompressedLength = view.getUint32(8);

    data = data.subarray(12);
    data = inflate(data, new Uint8Array(uncompressedLength));
    data = inflate(data, new Uint8Array(uncompressedLength));
    this.data = new Uint32Array(data.buffer);
  }

  get(codePoint: number) {
    let index: number;
    if (codePoint < 0 || codePoint > 0x10ffff) {
      return this.errorValue;
    }
    if (codePoint < 0xd800 || (codePoint > 0xdbff && codePoint <= 0xffff)) {
      index = (this.data[codePoint >> SHIFT_2] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    if (codePoint <= 0xffff) {
      index =
        (this.data[LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> SHIFT_2)] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    if (codePoint < this.highStart) {
      index = this.data[INDEX_1_OFFSET - OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> SHIFT_1)];
      index = this.data[index + ((codePoint >> SHIFT_2) & INDEX_2_MASK)];
      index = (index << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    return this.data[this.data.length - DATA_GRANULARITY];
  }
}
