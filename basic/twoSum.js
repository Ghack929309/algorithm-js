function twoSum(numbers, target) {
  // ...
  //input [1,2,3] target => 4
  //output 1+3 =4 => (0,2)
  //take the first element in my array minus it with the target
  let keyElement = target - numbers[0];
  console.log(keyElement);
  let len = numbers.length;
  //create a variable that will store the index of the matches elements
  let matchIndex = [];
  for (let i = 0; i < len; i++) {
    if (numbers.includes(keyElement, 1)) {
      matchIndex = [0, numbers.indexOf(keyElement, 1)];
    } else if (!numbers.includes(keyElement, 1) && target - numbers[i] > 0) {
      keyElement = target - numbers[i + 1];
      if (numbers.includes(keyElement)) {
        return (matchIndex = [
          numbers.indexOf(numbers[i + 1]),
          numbers.lastIndexOf(keyElement),
        ]);
      }
    }
  }

  return matchIndex;
  //if not exist we will minus the second element with the target and search again for the result
}
twoSum([3, 5, 5, 1], 4);
