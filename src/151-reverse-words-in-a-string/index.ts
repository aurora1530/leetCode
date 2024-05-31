function reverseWords(s: string): string {
  s = s.trim();
  s = s.replace(/ {2,}/g, ' ');

  const splitted = s.split(' ');
  const reverseIndexes = Array.from(
    { length: splitted.length },
    (_, idx) => splitted.length - idx - 1
  );

  return reverseIndexes.map((idx) => splitted[idx]).join(' ');
}
