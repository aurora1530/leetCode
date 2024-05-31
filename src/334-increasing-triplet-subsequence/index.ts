function increasingTriplet(nums: number[]): boolean {
  let small = Number.MAX_VALUE;
  let big = Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (value <= small) small = value;
    else if (value <= big) big = value;
    else return true;
  }

  return false;
}
