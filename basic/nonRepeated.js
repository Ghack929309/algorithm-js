let a = [1, 2, 1, 3, 4, 1, 7, 8, 7];

//array that will contain non-repeated value
let b = [];
let n = a.length;
//every iteration i will a the non repeated value to b
for (let i = 0; i < n; i++) {
  //indexOf method return -1 if the element does not exist inside of the array
  // I will add the element in b only if the element when my indexOf return -1
  // that mean that the element is not exist yet
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}
console.log(b);
//******************************************************************************** */
//******************************************************************************** */
//******************************************************************************** */
let c = [];
for (let i of a) {
  //let add our non repeated value if it does not exist in add
  if (c.includes(i) === false) {
    c.push(i);
  }
}
console.log(c);
//******************************************************************************** */
//******************************************************************************** */
//******************************************************************************** */
let obj = {};
for (let i of a) {
  obj[i] = true;
}
let arr = Object.keys(obj);
console.log(arr);
//******************************************************************************** */
//******************************************************************************** */
//******************************************************************************** */
let temp;
let val = [];
a.sort();
for (let i = 0; i < n; i++) {
  //if the value of temp is != than the value of a[i] add it to the val array
  if (temp !== a[i]) {
    val.push(a[i]);
    temp = a[i];
  }
}
console.log(val);

//******************************************************************************** */
//******************************************************************************** */
//******************************************************************************** */

let nonRepeated = new Set(a);
console.log(nonRepeated);
