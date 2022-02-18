//if all letter exist return true otherwhise return false

function allAlphabet(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = string
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/[" "]/g, "")
    .split("");
  let nonRepeated = [...new Set(newString)];
  return nonRepeated.length !== alphabet.length ? false : true;
}
allAlphabet("The quick brown fox jumps over the lazy dog.");

function calculateGuests(str) {
  let string = str.split(" ");
  let number = [];
  for (let num of string) {
    let numInString = num.replace(/[^(\d+)\.(\d+)]/g, "");
    if (numInString) {
      number.push(Math.floor(numInString));
    }
  }
  return Number(number[0]);
}

calculateGuests("There  will be 7 or 9 guys");

//polyfills.io
