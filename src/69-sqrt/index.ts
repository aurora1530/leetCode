function mySqrt(x: number): number {
  if (x === 0) return 0;
  if (x < 4) return 1;

  // n^2<=xを満たす最大のnが答え

  for (let i = 0; i <= x; i++) {
    if (i * i > x) return i - 1;
  }
  return 0;
}
