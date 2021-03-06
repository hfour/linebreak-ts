import data from './trie-data';
import UnicodeTrie from './unicode-trie';
import { BK, CR, LF, NL, CB, BA, SP, WJ, AI, AL, SA, SG, XX, CJ, NS } from './classes';
import { DI_BRK, IN_BRK, CI_BRK, CP_BRK, pairTable } from './pairs';

export interface TextLike {
  charCodeAt(n: number): number;
  length: number;
}

const classTrie = new UnicodeTrie(data);

function mapClass(c: number) {
  switch (c) {
    case AI:
      return AL;
    case SA:
    case SG:
    case XX:
      return AL;
    case CJ:
      return NS;
    default:
      return c;
  }
}

function mapFirst(c: number) {
  switch (c) {
    case LF:
    case NL:
      return BK;
    case CB:
      return BA;
    case SP:
      return WJ;
    default:
      return c;
  }
}

export class Break {
  /**
   * Position of the last break
   */
  position: number;

  /**
   * Position of the first space character before the last break.
   * Breaks come after series of blank spaces and they are not
   * rendered at the end of the line. For example: `token = 'endofline   '`
   */
  spacePos: number;

  /**
   * True if this is a required line break, for example a hard line break character.
   */
  required: boolean;

  constructor(position: number, spacePos: number, required: boolean = false) {
    this.position = position;
    this.spacePos = spacePos;
    this.required = required;
  }
}

export class LineBreaker {
  node: TextLike;
  pos: number;
  lastPos: number;
  curClass: number;
  nextClass: number;

  constructor(node: TextLike) {
    this.node = node;
    this.pos = 0;
    this.lastPos = 0;
    this.curClass = null;
    this.nextClass = null;
  }

  private nextCodePoint() {
    var code = this.node.charCodeAt(this.pos++);
    var next = this.node.charCodeAt(this.pos);
    // if a surrogate pair
    if (0xd800 <= code && code <= 0xdbff && (0xdc00 <= next && next <= 0xdfff)) {
      this.pos++;
      return (code - 0xd800) * 0x400 + (next - 0xdc00) + 0x10000;
    }
    return code;
  }

  nextCharClass(first: boolean = null) {
    if (first == null) {
      first = false;
    }
    return mapClass(classTrie.get(this.nextCodePoint()));
  }

  nextBreak(): Break {
    let lastSpacePos = null;
    let lastClass: number = null;
    let shouldBreak: boolean = false;

    // get the first char if we're at the beginning of the string
    if (this.curClass === null) {
      this.curClass = mapFirst(this.nextCharClass());
    }

    while (this.pos < this.node.length) {
      this.lastPos = this.pos;
      lastClass = this.nextClass;
      this.nextClass = this.nextCharClass();

      // explicit newline
      if (this.curClass === BK || (this.curClass === CR && this.nextClass !== LF)) {
        this.curClass = mapFirst(mapClass(this.nextClass));
        return new Break(this.lastPos, this.lastPos, true);
      }

      // handle classes not handled by the pair table/
      let cur: number = null;
      switch (this.nextClass) {
        case SP:
          cur = this.curClass;
          break;
        case BK:
        case LF:
        case NL:
          cur = BK;
          break;
        case CR:
          cur = CR;
          break;
        case CB:
          cur = BA;
          break;
        default:
          cur = null;
          break;
      }

      // Trigger lastSpacePos when going from nonspace->space
      if (this.nextClass === SP && lastClass !== SP) {
        lastSpacePos = this.lastPos;
      }

      if (cur !== null) {
        this.curClass = cur;
        if (this.nextClass === CB) {
          return new Break(this.lastPos, lastSpacePos !== null ? lastSpacePos : this.lastPos);
        }
        continue;
      }

      // if not handled already, use the pair table
      switch (pairTable[this.curClass][this.nextClass]) {
        case DI_BRK: // direct break
          shouldBreak = true;
          break;
        case IN_BRK:
          shouldBreak = lastClass === SP;
          break;
        case CI_BRK:
          shouldBreak = lastClass === SP;
          if (!shouldBreak) {
            continue;
          }
          break;
        case CP_BRK: // prohibited for combining marks
          if (lastClass !== SP) {
            continue;
          }
          break;
        default:
          break;
      }

      // Reset lastSpacePosition if a non-space character encountered
      // Prevent swallowing "]swallowed"
      if (!shouldBreak && this.nextClass !== SP) lastSpacePos = null;

      this.curClass = this.nextClass;
      if (shouldBreak) {
        return new Break(this.lastPos, lastSpacePos !== null ? lastSpacePos : this.lastPos);
      }
    }

    if (this.pos >= this.node.length) {
      if (this.lastPos < this.node.length) {
        this.lastPos = this.node.length;
        return new Break(this.node.length, lastSpacePos !== null ? lastSpacePos : this.node.length);
      } else {
        return null;
      }
    }
  }
}
