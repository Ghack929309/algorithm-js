function word(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (result.length === 0) {
      result.push(str.toUpperCase());
    } else {
      let last = result[result.length - 1];
      result.push(last.substr(1).concat(last[0]));
    }
  }
  return result;
}
word("robot");

function fancyRecursion(str, strr) {
  if (!strr) {
    strr = str[0];
  }
  // Deal with the extreme case
  if (strr.length === str.length) return [`${strr}`];

  // Applying recursion
  let complete_word = `${str.substr(strr.length)}${strr}`;
  strr = `${strr}${str[strr.length]}`;

  const res = fancyRecursion(str, strr);
  res.push(complete_word);
  return res;
}
fancyRecursion("robot");
