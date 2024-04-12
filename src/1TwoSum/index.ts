function findIndexOfSliced(array: number[], startIdx: number, target: number): number {
  const length = array.length;
  for (let i = startIdx; i < length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

function twoSum(nums: number[], target: number): number[] {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const expectedOther = target - nums[i];
    const targetIdx = findIndexOfSliced(nums, i + 1, expectedOther);
    if (targetIdx !== -1) {
      return [i, targetIdx];
    }
  }

  return [];
}

twoSum([2, 7, 11, 15], 9);
