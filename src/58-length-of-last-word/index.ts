function lengthOfLastWord(s: string): number {
  let indexOfLastWordLastChar = -1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      indexOfLastWordLastChar = i;
      break;
    }
  }

  let length = 1;
  for (let i = indexOfLastWordLastChar - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      length++;
    } else {
      break;
    }
  }

  return length;
}
