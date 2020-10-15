function rangeIter(lb, ub) {
  if (!lb || !ub) throw new TypeError('undefined is not a number');
  if (typeof lb !== 'number') throw new TypeError(`${typeof lb} is not a number`);
  if (typeof ub !== 'number') throw new TypeError(`${typeof ub} is not a number`);
  return {
    ll: lb,
    [Symbol.iterator]: function iterator() {
      return { ...this, ...{ ll: lb } };
    },
    next: function next() {
      if (this.ll > ub) return { done: true };
      const result = { value: this.ll, done: false };
      this.ll += 1;
      return result;
    },
  };
}

export { rangeIter };
