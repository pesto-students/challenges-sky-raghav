const flipArgs = (...args) => {
  let result = [];
  if (args.length) result = args.reverse();
  return result;
};

export {
  flipArgs,
};
