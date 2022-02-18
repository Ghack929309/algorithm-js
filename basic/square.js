//if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num) {
  let sq = num.toString().split("");
  let result = "";
  for (let i = 0; i < sq.length; i++) {
    result += sq[i] * sq[i];
  }

  return parseInt(result);
}
squareDigits(9119);
