import * as fs from 'fs';
import { expect } from 'chai';
import * as punycode from 'punycode';
import { LineBreaker, Break } from '../src';
import { skipTests } from './unicode.util';

describe('Unicode line break tests', () => {
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
    let breaks: string[] = [];
    let last = 0;
    let bk: Break = null;
    while ((bk = breaker.nextBreak())) {
      breaks.push(str.slice(last, bk.position));
      last = bk.position;
    }

    let expected = cols
      .split(/\s*÷\s*/)
      .slice(0, -1)
      .map(c => {
        let codes = c.split(/\s*×\s*/);
        if (codes[0] === '') codes.shift();
        let numCodes = codes.map(c => parseInt(c, 16));
        return punycode.ucs2.encode(numCodes);
      });

    if (skipTests.indexOf(i) > -1) {
      it.skip('cols', () => {});
      continue;
    }

    it(cols, () => {
      let msg = i + ' ' + JSON.stringify(breaks) + ' != ' + JSON.stringify(expected) + ' #' + comment;
      expect(breaks).to.deep.equal(expected, msg);
    });
  }
});
