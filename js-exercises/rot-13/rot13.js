const rot13 = (encodedString) => {
  let decodedString = '';
  for (let i = 0; i < encodedString.length; i += 1) {
    const charCode = encodedString.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      /** Get decoded upper case letter via ascii codes */
      const decodedCharCode = charCode + 13 > 90 ? charCode + 13 - 90 + 64 : charCode + 13;
      decodedString += String.fromCharCode(decodedCharCode);
    } else {
      decodedString += encodedString.charAt(i);
    }
  }
  return decodedString;
};

export {
  rot13,
};
