export { caculateBytesLength };

function caculateBytesLength(text: string): string {
  // 8A 3E 4F -> 3
  // 8A3E4F -> 3
  return '十进制:' + (text.replace(/\s/g, '').length/2).toString() + ' ' + '字节' + '\n' + '十六进制:' + (text.replace(/\s/g, '').length/2).toString(16) + ' ' + '字节';
}
