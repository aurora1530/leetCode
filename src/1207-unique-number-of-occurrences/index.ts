function uniqueOccurrences(arr: number[]): boolean {
  const numToCount: Map<number, number> = new Map();
  for (let i = 0; i < arr.length; i++) {
    const current = numToCount.get(arr[i]) ?? 0;
    numToCount.set(arr[i], current + 1);
  }

  const countSet = new Set(numToCount.values());
  return numToCount.size === countSet.size;
}
