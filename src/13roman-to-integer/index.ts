function romanToInt(s: string): number {
  const sLength = s.length;
  const strList = s.split('');

  const symbolToValue: Map<string, number> = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  const subtractRules: Map<string, string[]> = new Map([
    ['I', ['V', 'X']],
    ['X', ['L', 'C']],
    ['C', ['D', 'M']],
  ]);

  let result = 0;
  let i = 0;
  while (i < s.length) {
    const char = s[i];
    if (subtractRules.has(char)) {
      const nextChar = s[i + 1];
      if (subtractRules.get(char)?.includes(nextChar)) {
        result += symbolToValue.get(nextChar)! - symbolToValue.get(char)!;
        i += 2;
        continue;
      }
    }

    result += symbolToValue.get(char)!;
    i++;
  }
  return result;
}
