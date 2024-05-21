function findDifference(nums1: number[], nums2: number[]): number[][] {
  const num1Map: Map<number, true> = new Map();
  for (let i = 0; i < nums1.length; i++) {
    num1Map.set(nums1[i], true);
  }

  const num2Map: Map<number, true> = new Map();
  const num2Result: Set<number> = new Set();
  for (let i = 0; i < nums2.length; i++) {
    const value = nums2[i];
    num2Map.set(value, true);
    if (!num1Map.has(value)) {
      num2Result.add(value);
    }
  }

  const num1Result: Set<number> = new Set();
  for (let i = 0; i < nums1.length; i++) {
    const value = nums1[i];
    if (!num2Map.has(value)) {
      num1Result.add(value);
    }
  }
  return [[...num1Result], [...num2Result]];
}
