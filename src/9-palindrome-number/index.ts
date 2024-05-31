function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x >= 0 && x <= 9) return true;
  const str = x.toString();
  const midIdx = (str.length + 1) / 2;

  for (let i = 0; i < midIdx; i++) {
    if (str[i] !== str.at(-(i + 1))) return false;
  }
  return true;
}
