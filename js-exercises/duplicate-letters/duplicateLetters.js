const duplicateLetters = (...args) => {
  const obj = {};
  const obj2 = {};
  let max = false;
  for (const char of args[0]) {
    if (obj[char]) {
      obj2[char] += 1;
      max = obj2[char] > max ? obj2[char] : max;
    } else {
      obj[char] = true;
      obj2[char] = 1;
    }
  }
  return max;
};

export {
  duplicateLetters,
};
