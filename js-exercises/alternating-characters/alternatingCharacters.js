const getMinDeletionsForAlternatingChars = (str) => {
  let delCount = 0;
  for (let i = 0; i < str.length - 1; i += 1) {
    const currChar = str.charAt(i);
    const nextChar = str.charAt(i + 1);
    if (currChar === nextChar) delCount += 1;
  }
  return delCount;
};

function alternatingCharacters(arr) {
  return arr.map(getMinDeletionsForAlternatingChars);
}

export { alternatingCharacters };
