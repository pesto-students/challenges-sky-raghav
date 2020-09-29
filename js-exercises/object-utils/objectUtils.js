const map = (obj, callback) => {
  const mappedObj = {};
  Object.keys(obj).forEach((key) => {
    const result = callback(key, obj[key]);
    const newKey = result[0];
    const newVal = result[1];
    mappedObj[newKey] = newVal;
  });
  return mappedObj;
};

const filter = (obj, callback) => {
  const filteredObj = {};
  Object.keys(obj).forEach((key) => {
    if (callback(key, obj[key])) filteredObj[key] = obj[key];
  });
  return filteredObj;
};

const invert = (obj) => {
  const invertedObj = {};
  Object.keys(obj).forEach((key) => {
    invertedObj[obj[key]] = key;
  });
  return invertedObj;
};

const merge = (objects) => objects.reduce((accum, currItem) => Object.assign(accum, currItem), {});

const all = (obj, callback) => Object.keys(obj).every(key => callback.apply(obj, [key, obj[key]]));

const some = (obj, callback) => Object.keys(obj).some(key => callback.apply(obj, [key, obj[key]]));

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
