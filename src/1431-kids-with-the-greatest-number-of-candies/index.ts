function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxNumOfCandies = Math.max(...candies);

  const result = candies.map((value) => {
    const currentCandies = value + extraCandies;
    return currentCandies >= maxNumOfCandies;
  });

  return result;
}
