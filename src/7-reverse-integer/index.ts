function reverse(x: number): number {
  const reversedNum = reverseNumber(x);
  if (-1 * 2 ** 31 > reversedNum || reversedNum > 2 ** 31 - 1) {
    return 0;
  }
  return reversedNum;
}

function reverseNumber(x: number): number {
  const isMinus = x < 0;
  const str = x.toString().replace('-', '');
  const reversed = str.split('').reverse().join('');
  const numReversed = parseInt(reversed);
  return numReversed * (isMinus ? -1 : 1);
}
