function maxVowels(s: string, k: number): number {
  const isVowel = (char: string): boolean => {
    return 'aeiou'.includes(char);
  };

  let leftIdx = 0;
  let rightIdx = k - 1;
  let max = 0;
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) max++;
  }

  let preCount = max;
  while (rightIdx < s.length) {
    const nowCount =
      preCount - (isVowel(s[leftIdx]) ? 1 : 0) + (isVowel(s[rightIdx + 1]) ? 1 : 0);
    max = Math.max(max, nowCount);
    preCount = nowCount;

    leftIdx++;
    rightIdx++;
  }

  return max;
}
