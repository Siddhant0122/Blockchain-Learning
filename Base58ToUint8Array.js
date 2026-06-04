import bs58 from 'bs58';

function base58ToUint8Array(base58String) {
    return bs58.decode(base58String);
}

function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
}

const bs58String = "9Ajdvzr";
const Uint8Array = base58ToUint8Array(bs58String);
console.log(Uint8Array);
const asciiString = bytesToAscii(Uint8Array);
console.log(asciiString)