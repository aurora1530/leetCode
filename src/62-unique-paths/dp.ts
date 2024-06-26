function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = (dp[i - 1]?.[j] ?? 0) + (dp[i]?.[j - 1] ?? 0);
      }
    }
  }

  return dp[m - 1][n - 1];
}
