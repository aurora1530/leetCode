function isValid(s: string): boolean {
  const openStack: ('(' | '{' | '[')[] = [];
  const closeToOpen = {
    ')': '(',
    '}': '{',
    ']': '[',
  } as const;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '{' || char === '[') {
      openStack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      const pairOpenType = closeToOpen[char];
      const stackTail = openStack.pop();
      if (stackTail !== pairOpenType) {
        return false;
      }
    }
  }
  return openStack.length === 0;
}
