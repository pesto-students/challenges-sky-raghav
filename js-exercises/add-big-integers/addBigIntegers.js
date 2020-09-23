const sumOfTwoBigIntStrings = (str1, str2) => {
  let sum = '';
  let carry = 0;
  const maxVal = str1.length >= str2.length ? str1 : str2;
  const smallVal = str1.length < str2.length ? str1 : str2;
  maxVal.split('').reverse().forEach((item, index) => {
    const numFromFirstStr = parseInt(item, 10);
    if (smallVal.length - index - 1 > -1) {
      const numFromSecondStr = parseInt(smallVal.charAt(smallVal.length - index - 1), 10);
      const sumOftwoNumbers = numFromFirstStr + numFromSecondStr + carry;
      sum = (sumOftwoNumbers % 10) + sum;
      carry = parseInt(sumOftwoNumbers / 10, 10);
    } else {
      sum = (numFromFirstStr + carry) + sum;
      carry = parseInt((numFromFirstStr + carry) / 10, 10);
    }
  });
  if (carry > 0) sum = carry + sum;
  return sum;
};

const addBigIntegers = (bigIntString) => {
  const bigintArray = bigIntString.split('\n');
  return bigintArray.reduce((sum, currVal) => sumOfTwoBigIntStrings(sum, currVal));
};

export { addBigIntegers };
