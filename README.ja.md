# Base16384

Base16384は、JavaScriptで見た目の美しいSHA1ハッシュを生成するために使用される、漢字を用いた14ビットエンコーディングです。

## 機能
- バイナリデータをBase16384の文字列表現にエンコードします
- Base16384文字列をバイナリデータにデコードします
- 従来の16進数やBase64エンコーディングと比較して、より見た目の美しいハッシュを作成するために使用できます

## 使い方

コード内での使用例:

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
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
