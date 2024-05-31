function mergeAlternately(word1: string, word2: string): string {
  const isOneMoreLen = word1.length > word2.length;
  const maxWord = isOneMoreLen ? word1 : word2;
  const minLength = (isOneMoreLen ? word2 : word1).length;
  const length = word1.length + word2.length;

  const merged = [...new Array(minLength * 2)].map((_, i) => {
    const isTargetOne = i % 2 === 0;
    const wordIdx = Math.floor(i / 2);
    return (isTargetOne ? word1 : word2)[wordIdx];
  });

  const rest = maxWord.slice(minLength);

  return merged.join('') + rest;
}

console.log(mergeAlternately('abcd', 'pq'));
