function addBinary(a: string, b: string): string {
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let nextCarryUpNum = 0;
  let result = '';
  for (let i = a.length - 1; i >= 0; i--) {
    const aNum = parseInt(a[i]) + nextCarryUpNum;
    const bNum = parseInt(b[i]);

    const sum = aNum + bNum;

    if (sum === 0 || sum === 1) {
      result = sum.toString() + result;
      nextCarryUpNum = 0;
    } else {
      result = (sum - 2).toString() + result;
      nextCarryUpNum = 1;
    }
  }

  if (nextCarryUpNum) {
    result = '1' + result;
  }

  return result;
}
