const sumEvenArgs = (...args) => args.reduce((accum, item) => {
  if (item % 2 === 0) return accum + item;
  return accum;
}, 0);

export { sumEvenArgs };
