const balancedBraces = (...args) => {
  const braces = ['(', ')', '[', ']', '{', '}'];
  const stack = [];
  let result = false;
  for (const char of args[0]) {
    const idx = braces.indexOf(char);
    if (idx >= 0) {
      if (idx % 2 === 0) stack.push(char);
      else {
        if (stack.pop() !== braces[idx - 1]) {
          result = false;
          break;
        }
      }
    }
  }
  if (stack.length === 0) result = true;
  return result;
};

export {
  balancedBraces,
};
