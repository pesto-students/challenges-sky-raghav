const sumFibs = (num) => {
  let result = 0;
  if (num > 0) {
    let a = 1;
    let b = 1;
    let sum = 2;
    while (a + b <= num) {
      const next = a + b;
      a = b;
      b = next;
      if (next % 2 !== 0) sum += next;
    }
    result = sum;
  }
  return result;
};

const cacheFunction = (callback) => {
  const cache = {};
  return (num) => {
    let result;
    if (num in cache) result = cache[num];
    else {
      result = callback(num);
      cache[num] =  result;
    }
    return result;
  };
};

export { sumFibs, cacheFunction };
