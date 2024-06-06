function longestSubarray(nums: number[]): number {
  let i = nums.indexOf(1);
  if (i === -1) return 0;

  let left = 0;
  let right = 0;
  let max = 0;
  let nextIdx = 0;

  while (i < nums.length) {
    if (nums[i] === 1) {
      while (nums[i] === 1) {
        left++;
        i++;
      }
      if (nums[++i] !== 1) {
        max = Math.max(max, left + right);
        left = 0;
        i += 1;
        continue;
      }
      nextIdx = i;
      while (nums[i] === 1) {
        right++;
        i++;
      }
      max = Math.max(max, left + right);
      left = 0;
      right = 0;
      i = nextIdx;
      continue;
    } else {
      i++;
      continue;
    }
  }
  if (max === nums.length) {
    max--;
  }
  return max;
}
