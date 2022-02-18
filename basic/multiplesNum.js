//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  //code me
  //save the value of the multiplication after each iteration
  let result = 1;
  // split the input
  let splitNum = String(num).split("");
  //define the length of the array of numbers
  let len = splitNum.length;
  // take the length of the input and iterate with each element
  while (len >= 2) {
    for (let i = 0; i < splitNum.length; i++) {
      result *= splitNum[i];
    }
    len = String(result).length;
    if (splitNum.length) {
    }
    return (splitNum = String(result).split(""));
  }
  return splitNum;
  //multiply each element together

  // if the result is 2 numbers multiply them until we found 1 number and return this single number
}

persistence(39);
