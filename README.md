# Base16384 encoding/decoding ES module for JavaScript

- Base 16384 is 14bit encoding with kanji characters.
- 0x4e00-0x8dff = (0x4e00+(128*128)).toString(16)

One of the primary purposes is to have aesthetically pleasing SHA1 hashes. Compare:

 - Hex:    `17057684bea1f9331418b633a8f373119d765fd4`
 - B64:    `FwV2hL6h+TMUGLYzqPNzEZ12X9Q=`
 - B32:    `RJ56_U1WM_LTT5_3TQH_K4P0_YJ4L_UTKD_3ZZZ_ZW`
 - B16384: `叁敨惺濹嫅例曎盳櫄柗板戀`

## Getting started

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

## reference

- [fumiama/base16384: Encode binary files to printable utf16be.](https://github.com/fumiama/base16384)
- [Base64ならぬ、Base16384 - Qiita](https://qiita.com/n4o847/items/3510c08ab473f5c1c46d)
- [base16384 — Homebrew Formulae](https://formulae.brew.sh/formula/base16384)
- [base16384 - Rust](https://docs.rs/base16384/latest/base16384/)
