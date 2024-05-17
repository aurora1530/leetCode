function compress(chars: string[]): number {
  let targetChar = '';
  let targetCount = 0;

  const result: string[] = [];
  for (const char of chars) {
    if (char !== targetChar) {
      if (targetCount > 1) result.push(...targetCount.toString());
      targetChar = char;
      targetCount = 1;
      result.push(targetChar);
    } else {
      targetCount++;
    }
  }
  if (targetCount > 1) result.push(...targetCount.toString());
  chars.splice(0, chars.length, ...result);
  return result.length;
}

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
