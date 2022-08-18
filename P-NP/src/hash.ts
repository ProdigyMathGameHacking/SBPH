/** Stanford Javascript Crypto Library */
const sjcl = require("sjcl");


/** Generate base64-encoded SHA256 for given string. */
export function hash (text : string) : string {
  const hashed : string = sjcl.hash.sha256.hash(text);
  return sjcl.codec.base64.fromBits(hashed);
}