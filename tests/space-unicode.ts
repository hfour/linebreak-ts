import * as fs from 'fs';
import { expect } from 'chai';
import * as punycode from 'punycode';
import { LineBreaker, Break } from '../src';
import { skipTests } from './unicode.util';

// Spaces and NEL (next-line) character
export function hasNonEmpty(txt: string) {
  return /[^\s\u0085]/g.test(txt);
}

describe('Unicode space no chars tests', () => {
  let data = fs.readFileSync(__dirname + '/LineBreakTest.txt', 'utf-8');
  let lines = data.split('\n');
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (!line || /^#/.test(line)) continue;

    let [cols, comment] = line.split('#');
    let codePoints = cols
      .split(/\s*[×÷]\s*/)
      .slice(1, -1)
      .map(c => parseInt(c, 16));
    let str = punycode.ucs2.encode(codePoints);

    let breaker = new LineBreaker(str);
    let spaces: string[] = [];
    let bk: Break = null;
    while ((bk = breaker.nextBreak())) {
      const spacePos = bk.spacePos != null ? bk.spacePos : bk.position;
      spaces.push(str.substring(spacePos, bk.position));
    }

    if (skipTests.indexOf(i) > -1) {
      it.skip('cols', () => {});
      continue;
    }

    it(cols, () => {
      for (let s of spaces) {
        let charCodes: number[] = [];
        for (let i = 0; i < s.length; i++) {
          charCodes.push(s.charCodeAt(i));
        }
        const nonEmpty = hasNonEmpty(s);
        expect(nonEmpty).to.eq(false, `has non space "${s}" charcodes:"${charCodes}" ${comment}`);
      }
    });
  }
});
