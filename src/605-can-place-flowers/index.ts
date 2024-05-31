function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const canPlaced: boolean[] = [];

  flowerbed.forEach((value, index) => {
    const isEmpty = value === 0;
    if (!isEmpty) {
      canPlaced.push(false);
      return;
    }

    const isLeftEmpty = index === 0 || flowerbed[index - 1] === 0;
    if (!isLeftEmpty) {
      canPlaced.push(false);
      return;
    }

    const isRightEmpty = index === flowerbed.length - 1 || flowerbed[index + 1] === 0;
    if (!isRightEmpty) {
      canPlaced.push(false);
      return;
    }

    const isLeftPlaced = canPlaced[index - 1];
    canPlaced.push(!isLeftPlaced);
  });

  const canPlacedNum = canPlaced.filter(Boolean).length;

  return n <= canPlacedNum;
}
