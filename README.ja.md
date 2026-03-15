# Base16384

Base16384は、視覚的に魅力的なSHA1ハッシュを作成するための14ビットの文字エンコーディングです。JavaScriptで使用できます。

## 機能
- バイナリデータをBase16384文字列に変換
- Base16384文字列をバイナリデータに変換
- 従来のhexやbase64エンコーディングよりも視覚的により魅力的なハッシュを作成できる

## 使い方

コードの中で:

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

## ライセンス
MIT