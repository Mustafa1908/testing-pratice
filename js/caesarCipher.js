function caesarCipher(string, shiftFactor) {
  let alphabetArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let shiftedString = "";
  string = string.toUpperCase();

  for (let i = 0; i < string.length; i++) {
    let letterIndex = alphabetArray.indexOf(string.charAt(i));

    if (letterIndex + shiftFactor > 26) {
      let newIndex = letterIndex + shiftFactor - 26;
      shiftedString += alphabetArray[newIndex];
      continue;
    } else if (
      string.charAt(i) === "." ||
      string.charAt(i) === "!" ||
      string.charAt(i) === ","
    ) {
      shiftedString += string.charAt(i);
      continue;
    }

    shiftedString += alphabetArray[letterIndex + shiftFactor];
  }

  return shiftedString;
}

export default caesarCipher;
