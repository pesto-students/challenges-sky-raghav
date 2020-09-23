const abbreviateString = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Please pass a valid String');
  }
  const words = str.split(/[\s]+/);
  const abbreviatedLetter = words[words.length - 1].charAt(0);
  return `${words[0]} ${abbreviatedLetter.toUpperCase()}.`;
};

export { abbreviateString };
