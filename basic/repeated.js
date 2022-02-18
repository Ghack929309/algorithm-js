function sockMerchant(n, ar) {
  // object that will store each repeated element with their times repeated
  //let's sort the array
  ar.sort((a, b) => a - b);

  let count = 0;
  let unique = [...new Set(ar)];

  for (let i of unique) {
    let finder = ar.filter((el) => el === i);

    if (finder.length % 2 === 0) {
      count += finder.length / 2;
    } else if (finder.length % 2 !== 0 && finder.length - 1 != 0)
      count += (finder.length - 1) / 2;
  }

  return count;
}
arr = [1, 1, 1, 2, 1, 2, 3, 3, 2, 2];

sockMerchant(arr.length, arr);
//output 4
