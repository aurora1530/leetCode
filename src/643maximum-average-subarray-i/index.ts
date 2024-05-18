function findMaxAverage(nums: number[], k: number): number {
  let kSumValue = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxAve = kSumValue / k;
  let leftIdx = 1;
  let rightIdx = k;
  while (rightIdx < nums.length) {
    kSumValue = kSumValue - nums[leftIdx - 1] + nums[rightIdx];
    maxAve = Math.max(maxAve, kSumValue / k);
    leftIdx++;
    rightIdx++;
  }

  return maxAve;
}
