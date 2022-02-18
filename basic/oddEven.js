function oddOrEven(array) {
  //enter code here
  total = 0;
  for (let i of array) {
    total += i;
  }
  if (total % 2 == 0) {
    return "even";
  }
  return "odd";
}
oddOrEven([0, 1, 4]);

//input [2,5]
//output 3,5
function oddNumbers(l, r) {
  // Write your code here
  //create a resutl array of odd numbers
  let result = [];
  //start with the l value increment it to the r value
  for (let i = l; i <= r; i++) {
    // each iteration verify if the number % 2 is equal to 1, if so
    if (i % 2 == 1) {
      //add it the the result array
      result.push(i);
    }
  }
  return result;
}
oddNumbers(2, 5);
