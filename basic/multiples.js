//multiplesOf3and5(10) should return a number.
function multiplesOf3and5(num) {
  let result = 0;
  num % 3;
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num;
  } else if (num % 3 == 0) {
    for (let i = 0; i <= num; i + 3) {
      result += i;
    }
  } else {
    for (let i = 0; i <= num; i + 3) {
      result += i;
    }
  }
  return result;
}
multiplesOf3and5(9);
