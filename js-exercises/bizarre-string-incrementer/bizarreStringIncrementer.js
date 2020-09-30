function getLastNumberFromString(str) {
  let numberStartingIndex = str.length;
  str.split('').reverse().some((item) => {
    if (parseInt(item, 10)) {
      numberStartingIndex -= 1;
    } else return true;
  });
  return str.slice(numberStartingIndex);
}

function bizarreStringIncrementer(str) {
  const lastNumber = getLastNumberFromString(str);
  const newNumber = lastNumber ? parseInt(lastNumber, 10) + 1 : 1;
  const restOfTheString = str.slice(0, str.length - lastNumber.length);
  let newString = restOfTheString + newNumber;
  /* ----Checking the need of filling leading zeroes---- */
  if (newString.length > str.length && restOfTheString.charAt(restOfTheString.length - 1) === '0') {
    newString = restOfTheString.slice(0, restOfTheString.length - 1) + newNumber;
  }
  console.log('#####',lastNumber, newNumber, restOfTheString, newString);
  return newString;
}

export {
  bizarreStringIncrementer,
};
