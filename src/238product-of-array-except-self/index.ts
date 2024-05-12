function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  /**
   * [i][0] = nums.slice(0,i)の積
   * [i][1] = nums.slice(i+1)の積
   */
  const products: [number, number][] = Array.from({ length }, () => {
    return [1, 1];
  });

  products[0][0] = nums[0];
  products[length - 1][1] = 1;

  for (let i = 1; i < length; i++) {
    products[i][0] *= nums[i] * products[i - 1][0];
    products[length - i - 1][1] *= nums[length - i] * products[length - i][1];
  }
  return nums.map((_, i) => {
    if (i === 0) return products[i][1];
    return products[i - 1][0] * products[i][1];
  });
}
