const removeFalsyValues = (array) => {
  const isTruthy = Boolean;
  return array.filter(isTruthy);
};

export {
  removeFalsyValues,
};
