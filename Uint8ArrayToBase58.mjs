import bs58 from 'bs58';


function uint8ArrayToBase58(uint8Array){
    return bs58.encode(uint8Array);
}

function asciiToBytes(asciiString){
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

// Example usage:
const asciiString = "Hello"
const byteArray = asciiToBytes(asciiString);
const base58String = uint8ArrayToBase58(byteArray);
console.log(base58String);