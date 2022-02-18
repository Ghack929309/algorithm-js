function positiveSum(arr) {
  let n = 0;
  for (let i of arr) {
    if (i >= 0) {
      n += i;
    }
  }
  return n;
}
positiveSum([1, -4, 7, 12]);

//[1,-4,7,12] => 1 + 7 + 12 = 20
