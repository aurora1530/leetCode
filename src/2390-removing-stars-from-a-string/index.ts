function removeStars(s: string): string {
  const nonStars: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '*') {
      nonStars.pop()!;
    } else {
      nonStars.push(char);
    }
  }

  return nonStars.join('');
}
