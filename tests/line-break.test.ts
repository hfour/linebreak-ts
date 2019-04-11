import * as fc from 'fast-check';
import { LineBreaker, Break } from '../src';
import { asciiSpaced, hasNonSpace } from './string-gen.util';

// const customAscii = asciiSpaced().map(s => `aa ${s} aa`);
const customAscii = asciiSpaced();

describe('line breaking', () => {
  it('should not gobble up characters from generator', () => {
    fc.assert(
      fc.property(customAscii, txt => {
        let lb = new LineBreaker(txt);
        let brk: Break = null;
        let lastBrk: Break = new Break(0, 0, false);
        while ((brk = lb.nextBreak())) {
          const word = txt.substring(lastBrk.position, brk.spacePos);
          const space = txt.substring(brk.spacePos, brk.position);
          if (hasNonSpace(space)) throw new Error(`non-empty-space word:"${word}" space:"${space}"`);
          lastBrk = brk;
        }
      }),
      { numRuns: 10000 },
    );
  });

  it('should split spaces consistently', () => {
    const txtary = [
      {
        word: ' yellow',
        space: '   ',
      },
      {
        word: 'swleeee',
        space: '    ',
      },
      {
        word: 'mellow',
        space: '   ',
      },
    ];
    let txt = txtary.map(t => t.word + t.space).join('');

    let lb = new LineBreaker(txt);
    let brk: Break = null;
    let lastBrk: Break = { spacePos: 0, position: 0, required: false };
    let idx = 0;
    while ((brk = lb.nextBreak())) {
      const word = txt.substring(lastBrk.position, brk.spacePos);
      const space = txt.substring(brk.spacePos, brk.position);
      expect(word).toEqual(txtary[idx].word);
      expect(space).toEqual(txtary[idx].space);
      lastBrk = brk;
      idx++;
    }
  });
});
