const fibonacciIter = {
  [Symbol.iterator]: function iterator() {
    this.a = 0;
    this.b = 1;
    return this;
  },
  next: function next() {
    const result = { value: this.a + this.b, done: false };
    const temp = this.a + this.b;
    this.a = this.b;
    this.b = temp;
    return result;
  },
};

export { fibonacciIter };
