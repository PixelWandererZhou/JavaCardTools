export { convertTextToAsciiHex, convertAsciiHexToText };

function convertTextToAsciiHex(text: string): string {
  // 123 -> 313233
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(16))
    .join('');
}

function convertAsciiHexToText(binary: string): string {
  // 313233 -> 123
  return binary
    .match(/.{1,2}/g)
    ?.map(byte => String.fromCharCode(parseInt(byte, 16)))
    .join('') ?? '';
    
}
