const lastIndexOf = (...args) => {
  let result = -1;
  for (let i = args[1].length - 1; i >= 0; i--) {
    if (args[1][i] === args[0]) {
      result = i;
      break;
    }
  }
  return result;
};

export {
  lastIndexOf,
};
