function plusOne(digits: number[]): number[] {
  const isTailValueNine = digits.at(-1) === 9;
  let shouldCarryUpNext = isTailValueNine;
  if (isTailValueNine) {
    digits[digits.length - 1] = 0;
  } else {
    digits[digits.length - 1]++;
  }

  for (let i = digits.length - 2; i >= 0 && shouldCarryUpNext; i--) {
    const isValueNine = digits[i] === 9;
    if (isValueNine) {
      digits[i] = 0;
    } else {
      digits[i]++;
    }
    shouldCarryUpNext = isValueNine;
  }
  if (shouldCarryUpNext) {
    return [1, ...digits];
  }

  return digits;
}
console.log(plusOne([8, 9, 9, 9]));
