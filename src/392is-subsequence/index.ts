function isSubsequence(s: string, t: string): boolean {
  if (s === '') return true;
  let sIdx = 0;
  for (let tIdx = 0; tIdx < t.length && sIdx < s.length; tIdx++) {
    console.log(sIdx, tIdx);
    if (t[tIdx] === s[sIdx]) {
      sIdx++;
      if (sIdx === s.length) return true;
    }
  }

  return false;
}

console.log(isSubsequence('abc', 'ahbgdc'));
