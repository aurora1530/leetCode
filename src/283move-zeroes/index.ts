/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroIdx = 0;
  let notZeroIdx = -1;
  while (notZeroIdx < nums.length && zeroIdx < nums.length) {
    while (zeroIdx < nums.length && nums[zeroIdx] !== 0) {
      zeroIdx++;
    }
    if (zeroIdx >= nums.length) break;

    notZeroIdx = zeroIdx + 1;

    while (notZeroIdx < nums.length && nums[notZeroIdx] === 0) {
      notZeroIdx++;
    }
    if (notZeroIdx >= nums.length) break;

    [nums[zeroIdx], nums[notZeroIdx]] = [nums[notZeroIdx], nums[zeroIdx]];

    zeroIdx++;
  }
}
