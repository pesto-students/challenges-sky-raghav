function forEach(array, callback, thisArg) {
  for (let i = 0; i < array.length; i += 1) {
    callback.call(thisArg || this, array[i], i, array);
  }
}

function map(array, callback, thisArg) {
  const mappedArray = [];
  for (let i = 0; i < array.length; i += 1) {
    mappedArray[i] = callback.call(thisArg || this, array[i], i, array);
  }
  return mappedArray;
}

function filter(array, callback, thisArg) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback.call(thisArg || this, array[i], i, array)) filteredArray.push(array[i]);
  }
  return filteredArray;
}

function reduce(array, callback, initialValue) {
  let reducedValue = initialValue || 0;
  for (let i = 0; i < array.length; i += 1) {
    reducedValue = callback(reducedValue, array[i], i, array);
  }
  return reducedValue;
}

export {
  forEach,
  map,
  filter,
  reduce,
};
