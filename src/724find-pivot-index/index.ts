function pivotIndex(nums: number[]): number {
  /**
   * [i]: sums(nums.slice(0,i))
   */
  const leftSums: number[] = new Array(nums.length + 2);
  leftSums[0] = 0;
  leftSums[leftSums.length - 1] = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSums[i + 1] = leftSums[i] + nums[i];
  }

  const total = leftSums[leftSums.length - 2];
  for (let i = 0; i < nums.length; i++) {
    const left = leftSums[i];
    const right = i === leftSums.length - 1 ? 0 : total - leftSums[i + 1];
    if (left === right) {
      return i;
    }
  }

  return -1;
}
