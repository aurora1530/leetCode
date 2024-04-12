const backtrack = (
  result: string[],
  current: string,
  open: number,
  close: number,
  max: number
) => {
  if (current.length === max * 2) {
    result.push(current);
    return;
  }

  if (open < max) {
    backtrack(result, current + '(', open + 1, close, max);
  }
  if (close < open) {
    backtrack(result, current + ')', open, close + 1, max);
  }
};

function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  backtrack(result, '', 0, 0, n);
  return result;
}
