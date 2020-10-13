function curry(fn) {
  return function curried(...totalArgs) {
    if (totalArgs.length >= fn.length) return fn.apply(this, totalArgs);
    return (...splittedArgs) => curried.apply(this, totalArgs.concat(splittedArgs));
  };
}

export {
  curry,
};
