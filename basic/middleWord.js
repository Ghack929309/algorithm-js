//Kata.getMiddle("test") should return "es"

//Kata.getMiddle("testing") should return "t"

function getMiddle(str) {
  let result = [];
  str.split("");
  const len = str.length;
  if (len % 2 === 0) {
    result = str[len / 2 - 1].concat(str[len / 2]);
  } else {
    result = str[Math.floor(len / 2)];
  }

  return result;
}
getMiddle("test");
