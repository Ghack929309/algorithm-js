function sumTwoSmallestNumbers(numbers) {
  //Code here
  numbers.sort((a, b) => a - b);
  const [first, second] = numbers;
  return first + second;
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
positiveSum([1, -4, 7, 12]);

function oddOrEven(array) {
  //enter code here

  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 && array[i] === 1) {
      return "odd";
    }
    result += array[i];
  }
  if (result % 2 !== 0) {
    return "odd";
  }
  return "even";
}
oddOrEven([0, 1, 4]);

//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

var maxSequence = function (arr) {
  // ...
  let number = 0;
  arr.length < 1 && 0;
  arr = [...new Set(arr)]
    .sort((a, b) => b - a)
    .splice(0, 4)
    .map((n) => {
      number += n;
    });
  return number > 0 ? number : 0;
};
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//binary conversion
const addBinary = (a, b) => (parseInt(a, 2) + parseInt(b, 2)).toString(2);
addBinary("11", "1");
let a = "11" + 2;
console.log(Number(a));
console.log(typeof String(a));
