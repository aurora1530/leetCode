function lengthOfLongestSubstring(s: string): number {
  const sLength = s.length;
  let maxLength = 0;

  let startIdx = 0;
  let flag = false;
  while (startIdx < sLength && !flag) {
    let currentLength = 0;
    const map = new Map<string, number>();
    for (let i = startIdx; i < sLength; i++) {
      const char = s[i];
      const alreadyExistIdx = map.get(char);
      if (alreadyExistIdx !== undefined) {
        startIdx = alreadyExistIdx + 1;
        break;
      }

      map.set(char, i);
      currentLength++;

      if (startIdx + currentLength >= sLength || currentLength === sLength) flag = true;
    }
    if (currentLength > maxLength) maxLength = currentLength;
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('aab'));
