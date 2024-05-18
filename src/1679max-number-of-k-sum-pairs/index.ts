function maxOperations(nums: number[], k: number): number {
  const numToIndexes: Map<number, number[]> = new Map();

  let result: number = 0;

  nums.forEach((value, index) => {
    const pairIndex = numToIndexes.get(k - value)?.pop();
    if (pairIndex === undefined) {
      const currentIndexes = numToIndexes.get(value) ?? [];
      currentIndexes.push(index);
      numToIndexes.set(value, currentIndexes);
      return;
    }
    nums[pairIndex] = 0;
    result++;
  });

  return result;
}
