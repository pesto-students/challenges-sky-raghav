const limitFunctionCallCount = (callback, n) => {
  let count = n;
  return (x, y, z) => {
    let result = null;
    if (count > 0) {
      result = callback(x, y, z);
      count -= 1;
    }
    return result;
  };
};

export {
  limitFunctionCallCount,
};
