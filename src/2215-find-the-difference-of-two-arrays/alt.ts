function findDifference(nums1: number[], nums2: number[]): number[][] {
  const maxLength = Math.max(nums1.length, nums2.length);

  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (let i = 0; i < maxLength; i++) {
    if (nums1[i] !== undefined) set2.delete(nums1[i]);
    if (nums2[i] !== undefined) set1.delete(nums2[i]);
  }

  return [Array.from(set1), Array.from(set2)];
}
