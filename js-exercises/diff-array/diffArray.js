const diffArray = (arrayA, arrayB) => arrayA
  .filter(itemOfA => !arrayB.includes(itemOfA))
  .concat(arrayB.filter(itemOfB => !arrayA.includes(itemOfB)));

export {
  diffArray,
};
