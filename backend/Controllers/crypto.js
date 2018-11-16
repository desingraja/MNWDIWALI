var crypt=require("crypto-js");

var ciphertext=crypt.SHA256.encrypt('Hai','12345')

var bytes=crypt.SHA256.decrypt(ciphertext.toString(),'12345')
console.log(bytes);

var plaintext=bytes.toString(crypt.enc.Utf8);
console.log(plaintext);
