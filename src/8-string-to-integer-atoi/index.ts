function myAtoi(s: string): number {
  const max = 2 ** 31 - 1;
  const min = -1 * 2 ** 31;

  s = s.trim();
  const firstChar = s[0];
  const isFirstSign = firstChar === '-' || firstChar === '+';
  const isMinus = firstChar === '-';

  let result = 0;
  const firstIndex = isFirstSign ? 1 : 0;
  for (let i = firstIndex; i < s.length; i++) {
    if (s[i].match(/\d/)) {
      result = result * 10 + Number(s[i]);
    } else {
      break;
    }
  }
  result = result * (isMinus ? -1 : 1);

  if (result < min) return min;
  if (result > max) return max;
  return result;
}

console.log(myAtoi('123'));
