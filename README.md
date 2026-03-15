# Base16384

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Base16384 is a 14-bit encoding with Kanji characters used for aesthetically pleasing SHA1 hashes in JavaScript.

## Features
- Encodes binary data to a Base16384 string representation
- Decodes Base16384 strings back to binary data
- Can be used to create more visually appealing hashes compared to traditional hex or base64 encoding

## Usage

In your code:

```javascript
import { Base16384 } from "https://code4fukui.github.io/Base16384/Base16384.js";

const encoded = Base16384.encode(new Uint8Array([1, 2, 3, 4]));
console.log(encoded);
const decoded = Base16384.decode(encoded);
console.log(decoded);

const key = new Uint8Array(32); // 32byte -> 19chars
crypto.getRandomValues(key);
const encoded2 = Base16384.encode(key);
console.log(encoded2); // 橍氧纛汒癘厹徿壁尸讌寛奭懺淈苳傷叮瀙樀
```

## License
MIT