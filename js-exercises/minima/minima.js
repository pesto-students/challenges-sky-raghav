function minima(elementsToReturn, array) {
  return array.sort((a, b) => a - b).slice(0, elementsToReturn);
}

export { minima };
