function asciiToBytes(asciiString){
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

//example usage
const asciiString = "Hello";
const byteArray = asciiToBytes(asciiString);
const base64Encoded = Buffer.from(byteArray).toString("base64");
console.log(base64Encoded);
