const factorial = (num: number): number => {
  let result = 1;
  for (let i = num; i >= 2; i--) {
    result = result * i;
  }
  return result;
};

function uniquePaths(m: number, n: number): number {
  const top = factorial(m + n - 2);
  const bottom = factorial(m - 1) * factorial(n - 1);

  return top / bottom;
}
