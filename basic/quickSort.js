// sort ascending the array of element
//[3,2,1]
//[1,2,3]

//>left  middle >right
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let middle = array[array.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < middle) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), middle, ...quickSort(right)];
}
let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
quickSort(array);
