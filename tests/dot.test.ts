/**
 * Test ".[" not swallowing the dot "."
 */
import { LineBreaker } from '../src';
import { pairTable, PR_BRK } from '../src/pairs';

test('dot square bracket test', () => {
  const text = '.[';
  const lb = new LineBreaker(text);
  const cc1 = lb.nextCharClass();
  const cc2 = lb.nextCharClass();
  expect(pairTable[cc1][cc2]).toEqual(PR_BRK);
});
