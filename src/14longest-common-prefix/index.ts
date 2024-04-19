function longestCommonPrefix(strs: string[]): string {
  // array[i]=i文字目の文字 を代入するようにする
  // 各strs[j]のi文字目とarray[i]が一致するもののうち、最も大きいiをkとする。
  // min_i=min(i,min_i)とする。
  // array.slice(0,max_i+1)を出力。max_i<0のときは""を出力

  const chars: string[] = strs[0].split('');
  let min_i = chars.length;

  strs.slice(1).forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== chars[i]) {
        min_i = Math.min(min_i, i - 1); //共通していた箇所までなので、i-1
        break;
      }
    }
    min_i = Math.min(min_i, str.length - 1); //全部一致していたら、strの最大indexまで一致ということ
  });

  if (min_i < 0) {
    return '';
  }
  return chars.slice(0, min_i + 1).join('');
}
