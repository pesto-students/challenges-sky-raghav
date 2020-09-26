const chunkArrayInGroups = (array, chunkSize) => {
  const chunks = [];
  const singleChunk = [];
  array.forEach((item, index) => {
    if (index % chunkSize === 0 && index !== 0) {
      chunks.push([...singleChunk]);
      singleChunk.length = 0;
    }
    singleChunk.push(item);
  });
  if (singleChunk.length) chunks.push([...singleChunk]);
  return chunks;
};

export {
  chunkArrayInGroups,
};
