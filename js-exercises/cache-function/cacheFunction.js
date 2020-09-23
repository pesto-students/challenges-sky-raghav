const cacheFunction = (callback) => {
  const cache = {};
  return (arg) => {
    let result;
    if (arg in cache) result = cache[arg];
    else {
      result = callback(arg);
      cache[arg] = result;
    }
    return result;
  };
};

export {
  cacheFunction,
};
