# linebreak-ts

An implementation of the Unicode Line Breaking Algorithm (UAX #14)

> Line breaking, also known as word wrapping, is the process of breaking a section of text into lines such that it will
> fit in the available width of a page, window or other display area. The Unicode Line Breaking Algorithm performs part
> of this process. Given an input text, it produces a set of positions called "break opportunities" that are appropriate
> points to begin a new line. The selection of actual line break positions from the set of break opportunities is not
> covered by the Unicode Line Breaking Algorithm, but is in the domain of higher level software with knowledge of the
> available width and the display size of the text.

This is a JavaScript/Typescript implementation of the
[Unicode Line Breaking Algorithm](http://www.unicode.org/reports/tr14/#SampleCode) for Node.js (and browsers I guess).
It is used by internally in H4 for line wrapping text in PDF documents, but since the algorithm knows nothing about the
actual visual appearance or layout of text, it could be used for other things as well.

The code is a fork of [linebreak](https://github.com/foliojs/linebreak) except for the following differences:

- It's rewritten in Typescript
- It doesn't download and rebuilds an trie, which should contain unicode symbols on which it breaks the lines
- It contains its own precompiled trie with those unicode symbols

## Installation

You can install via npm

    npm install linebreak-ts

## Example

```typescript
import { LineBreaker } from 'linebreak';

let lorem = 'lorem ipsum...';
let breaker = new LineBreaker(lorem);
let last = 0;
let bk;

while ((bk = breaker.nextBreak())) {
  // get the string between the last break and this one
  let word = lorem.slice(last, bk.position);
  console.log(word);

  // you can also check bk.required to see if this was a required break...
  if (bk.required) {
    console.log('\n\n');
  }

  last = bk.position;
}
```

## License

MIT
