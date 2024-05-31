function maxArea(height: number[]): number {
  let leftIdx = 0;
  let rightIdx = height.length - 1;

  let maxArea = calcArea(height, leftIdx, rightIdx);
  while (leftIdx !== rightIdx) {
    if (height[leftIdx] < height[rightIdx]) {
      leftIdx++;
    } else {
      rightIdx--;
    }

    const currentArea = calcArea(height, leftIdx, rightIdx);
    maxArea = Math.max(maxArea, currentArea);
  }
  return maxArea;
}

function calcArea(height: number[], leftIdx: number, rightIdx: number): number {
  const bottomLength = rightIdx - leftIdx;
  const heightLength = Math.min(height[leftIdx], height[rightIdx]);
  return bottomLength * heightLength;
}
