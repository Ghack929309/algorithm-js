//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function (n) {
  // Program Me
  const result = n
    .toString(2)
    .split("")
    .filter((ele) => ele == 1).length;
  return result;
};
countBits("11000000111101001011011101100011");

//Move the first letter of each word to the end of it,
//then add "ay" to the end of the word. Leave punctuation marks untouched.
// igPay atinlay siay oolcay
