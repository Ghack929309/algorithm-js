function highAndLow(numbers) {
  // ...
  const low = numbers.split(" ").sort((a, b) => a - b);
  if (low.length > 1) {
    return `${low.splice(low.length - 1)} ${low[0]}`;
  }
  return `${numbers} ${numbers}`;
}
highAndLow("42 -4 3 3 5 46 7 3 23 -9");

function maxMin(num) {
  let arr = num.split(" ");
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    if (current > arr[i + 1]) {
      current = arr[i];
      newArray.push(current);
    }
  }
  return newArray;
}

maxMin("42 -4 3 3 5 46 7 3 23 -9");
