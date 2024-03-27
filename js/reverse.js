function reverse(string) {
  let reversedString = "";

  for (let i = string.length; i >= 0; i--) {
    reversedString += string.charAt(i);
  }
  return reversedString;
}

export default reverse;
