function intersect(nums1: number[], nums2: number[]): number[] {
  const count1 = Array.from({ length: 1001 }, () => 0);
  const count2 = Array.from({ length: 1001 }, () => 0);
  nums1.forEach((num) => count1[num]++);
  nums2.forEach((num) => count2[num]++);
  return count1.reduce((acc, count, num) => {
    const minCount = Math.min(count, count2[num]);
    return acc.concat(Array(minCount).fill(num));
  }, [] as number[]);
}
