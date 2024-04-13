function longestPalindrome(s: string): string {
  for (let currentLength = s.length; currentLength > 0; currentLength--) {
    const targetSubStrings = genAllSubstring(s, currentLength);
    for (const subStr of targetSubStrings) {
      const isOk = isPalindrome(subStr);
      if (isOk) return subStr;
    }
  }
  return '';
}

function genAllSubstring(s: string, length: number): string[] {
  const result: string[] = [];

  for (let startIdx = 0; startIdx + length - 1 < s.length; startIdx++) {
    result.push(s.slice(startIdx, startIdx + length));
  }
  return result;
}

function isPalindrome(s: string): boolean {
  const isEvenLength = s.length % 2 === 0;
  const midIdx = isEvenLength ? s.length / 2 - 1 : (s.length + 1) / 2;
  for (let i = 0; i <= midIdx; i++) {
    if (s[i] !== s.at(-(i + 1))) return false;
  }
  return true;
}
