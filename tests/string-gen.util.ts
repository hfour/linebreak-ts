import * as fc from 'fast-check';

function StringArbitrary(charArb: fc.Arbitrary<string>, aLength?: number, bLength?: number) {
  const arrayArb =
    aLength != null
      ? bLength != null
        ? fc.array(charArb, aLength, bLength)
        : fc.array(charArb, aLength)
      : fc.array(charArb);
  return arrayArb.map(tab => tab.join(''));
}

function spacedArbitrary(charArb: fc.Arbitrary<string>, minLength?: number, maxLength?: number) {
  const spaceChars = fc.frequency({ arbitrary: charArb, weight: 15 }, { arbitrary: fc.constant(' '), weight: 1 });
  return StringArbitrary(spaceChars, minLength, maxLength);
}

export function asciiSpaced(minLength?: number, maxLength?: number) {
  return spacedArbitrary(fc.ascii(), minLength, maxLength);
}

export function hasNonSpace(txt: string) {
  return /\S+/g.test(txt);
}
