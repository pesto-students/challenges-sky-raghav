function deepEqual(...args) {
  const ownPropertiesOfObj1 = Object.getOwnPropertyNames(args[0]);
  const ownPropertiesOfObj2 = Object.getOwnPropertyNames(args[1]);
  if (ownPropertiesOfObj1.length === ownPropertiesOfObj2.length) {
    const isMatchDescriptor = (args[2] && args[2].matchDescriptors) || false;
    let key;
    for (key in args[0]) {
      if (Object.prototype.hasOwnProperty.call(args[0], key)) {
        const hasOwnProperty = Object.prototype.hasOwnProperty.call(args[1], key);
        if (!hasOwnProperty || !(args[0][key] === args[1][key])) return false;
        if (isMatchDescriptor) {
          const descriptorsOfkey1 = Object.getOwnPropertyDescriptor(args[0], key);
          const descriptorsOfkey2 = Object.getOwnPropertyDescriptor(args[1], key);
          if (!deepEqual(descriptorsOfkey1, descriptorsOfkey2)) return false;
        }
      }
    }
    return true;
  }
  return false;
}

export {
  deepEqual,
};
