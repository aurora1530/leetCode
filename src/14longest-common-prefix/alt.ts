function longestCommonPrefix(strs: string[]): string {
  strs.sort();

  const first = strs[0];
  const last = strs.at(-1)!;

  const limit = Math.min(first.length, last?.length);

  let result = '';
  for (let i = 0; i < limit; i++) {
    if (first[i] !== last[i]) {
      return result;
    }
    result += first[i];
  }
  return result;
}
