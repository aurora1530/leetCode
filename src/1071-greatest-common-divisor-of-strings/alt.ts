function gcdOfStrings(str1: string, str2: string): string {
  const GCD = (x: number, y: number): number => (x % y ? GCD(y, x % y) : y);

  const isGcdStr = str1 + str2 === str2 + str1;
  return isGcdStr ? str1.slice(0, GCD(str1.length, str2.length)) : '';
}
