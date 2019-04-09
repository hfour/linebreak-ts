/**
 * Sample test
 */
import { LineBreaker, Break } from '../src';

test('break some text', () => {
  let txt = '[ ab cd ]';
  let breaker = new LineBreaker(txt);
  for (let bk: Break = null; (bk = breaker.nextBreak()); ) console.log(bk);
});
