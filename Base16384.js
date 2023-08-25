import { BitWriter } from "https://code4fukui.github.io/bitutil/BitWriter.js";
import { BitReader } from "https://code4fukui.github.io/bitutil/BitReader.js";
import { subbin } from "https://js.sabae.cc/binutil.js";

const encode = (bin) => {
  const r = new BitReader(bin);
  const ss = [];
  for (;;) {
    const n = r.read(14);
    if (n < 0) break;
    const c = String.fromCharCode(0x4e00 + n);
    ss.push(c);
  }
  return ss.join("");
};

const decode = (s, len = 0) => {
  const w = new BitWriter();
  for (const c of s) {
    const n = c.charCodeAt(0);
    if (n >= 0x4e00 && n <= 0x4e00 + (128 * 128)) {
      w.write(14, n - 0x4e00);
    }
  }
  const b = w.getBytes(true);
  if (len) {
    return subbin(b, 0, len)
  }
  return b;
}

export const Base16384 = { encode, decode };
