function intToRoman(num: number): string {
  const valueAndSymbol = [
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I'],
  ] as const;

  let result = '';

  valueAndSymbol.forEach(([value, symbol]) => {
    console.log(value, symbol);

    const size = Math.floor(num / value);
    const text = symbol.repeat(size);
    result += text;

    num -= value * size;
  });

  result = result
    .replace('VIIII', 'IX')
    .replace('IIII', 'IV')
    .replace('LXXXX', 'XC')
    .replace('XXXX', 'XL')
    .replace('DCCCC', 'CM')
    .replace('CCCC', 'CD');

  return result;
}
