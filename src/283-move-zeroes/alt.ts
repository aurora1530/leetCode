/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let snowBallSize = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      snowBallSize++;
    } else if (snowBallSize > 0) {
      const tempNum = nums[i];
      nums[i] = 0;
      nums[i - snowBallSize] = tempNum;
    }
  }
}
