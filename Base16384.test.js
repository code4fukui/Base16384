import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base16384 } from "./Base16384.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

Deno.test("simple", () => {
  const s = new TextEncoder().encode("abc");
  const encoded = Base16384.encode(s);
  const decoded = Base16384.decode(encoded);
  t.assertEquals(decoded, s);
});
Deno.test("encode", () => {
  const s = new TextEncoder().encode("1234567");
  const encoded = Base16384.encode(s);
  t.assertEquals(encoded, "婌焳廔萷");
});
Deno.test("deode", () => {
  const decoded = Base16384.decode("婌焳廔萷");
  const s = new TextDecoder().decode(decoded);
  t.assertEquals(s, "1234567");
});
Deno.test("uuid1", () => {
  const decoded = Base16384.decode("浬燦訯捇曠娕榶峗脺帀", 16);
  const s = Base16.encode(decoded);
  t.assertEquals(s, "7db23e6f0bd5476380c156ed8ed7cce9");
});
Deno.test("uuid2", () => {
  const uuid = crypto.randomUUID();
  const b = Base16.decode(uuid);
  const s = Base16384.encode(b);
  //console.log(uuid);
  //console.log(Base16.encode(b));
  //console.log(s);
  const b2 = Base16384.decode(s, 16);
  t.assertEquals(b, b2);
});
Deno.test("sha128", () => {
  const sha = Base16.decode("17O57684bea1f9331418b633a8f373119d765fd4");
  const s = Base16384.encode(sha);
  t.assertEquals(s, "叕蒄綨涓婐暶嫪崷婆歶旴");
  const sha2 = Base16384.decode(s);
  t.assertEquals(sha, sha2);
});
