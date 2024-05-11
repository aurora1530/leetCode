function reverseVowels(s: string): string {
  const isVowels = (char: string): boolean => 'aeiouAEIOU'.includes(char);
  const sArray = s.split('');

  let leftIdx = 0;
  let rightIdx = s.length - 1;
  while (leftIdx < rightIdx && leftIdx < s.length && rightIdx >= 0) {
    while (!isVowels(s[leftIdx]) && leftIdx < s.length) leftIdx++;
    while (!isVowels(s[rightIdx]) && rightIdx >= 0) rightIdx--;
    if (leftIdx >= rightIdx) break;

    sArray[leftIdx] = s[rightIdx];
    sArray[rightIdx] = s[leftIdx];

    leftIdx++;
    rightIdx--;
  }

  return sArray.join('');
}

console.log(reverseVowels('aA'));
