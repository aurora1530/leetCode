function isConsistOfStrRepeat(target: string, base: string): boolean {
  if (target.length % base.length !== 0) return false;
  const repeatNum = target.length / base.length;

  return target === base.repeat(repeatNum);
}

function gcdOfStrings(str1: string, str2: string): string {
  const isOneLarger = str1.length > str2.length;
  const largerWord = isOneLarger ? str1 : str2;
  const shorterWord = isOneLarger ? str2 : str1;

  const isShorterLenDividesLargerLen = largerWord.length % shorterWord.length === 0;
  if (isShorterLenDividesLargerLen) {
    const isGcdStr = isConsistOfStrRepeat(largerWord, shorterWord);
    return isGcdStr ? shorterWord : '';
  }

  for (let len = shorterWord.length - 1; len > 1; len--) {
    if (shorterWord.length % len !== 0) continue;

    const baseStr = shorterWord.slice(0, len);
    const isShortWordRepeated = isConsistOfStrRepeat(shorterWord, baseStr);
    if (!isShortWordRepeated) continue;

    const isGcdStr = isConsistOfStrRepeat(largerWord, baseStr);
    if (isGcdStr) {
      return baseStr;
    }
  }

  return '';
}
