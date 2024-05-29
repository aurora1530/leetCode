function longestOnes(nums: number[], k: number): number {
  let zeroCount = 0;
  let oneAndFlippedZeroCount = 0;
  let leftIdx = 0;
  let rightIdx = 0;

  while (zeroCount < k && rightIdx < nums.length) {
    const value = nums[rightIdx];
    if (value === 0) {
      zeroCount++;
    }
    oneAndFlippedZeroCount++;
    rightIdx++;
  }

  if (rightIdx === nums.length - 1) {
    return oneAndFlippedZeroCount;
  }

  let max = oneAndFlippedZeroCount;

  while (rightIdx < nums.length) {
    const value = nums[rightIdx];
    if (value === 0) {
      zeroCount++;
      if (zeroCount > k) {
        // leftIdxから右側をみて最も近い0を探す。
        while (nums[leftIdx] !== 0) {
          leftIdx++;
          oneAndFlippedZeroCount--;
        }
        // 見つけたら、右側にずらして0を一つ減らす。
        leftIdx++;
        zeroCount--;
      }
    } else {
      oneAndFlippedZeroCount++;
    }
    max = Math.max(max, oneAndFlippedZeroCount);
    rightIdx++;
  }
  return max;
}
