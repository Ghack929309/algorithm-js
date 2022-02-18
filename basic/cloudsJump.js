let test =
  "0 1 0 1 0 1 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0 0 0 1 0 1 0 1 0 0 1 0 1 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 1 0 1 0";
//input [0,1,0,0,0,1,0]
//we can jump minimum 1 index or 2 index to index if it's possible
//avoid to jump in index that have 1 as value
//possible jump from index to index => 0=>2=>3=>4=>6 => result should be 4
//second option is to jump from 0=>2=>4=>4 result should be 3
//the output should be the minimum jumps possible
function jumpingOnClouds(c) {
  // Write your code here
  let n = 0;
  let total = 0;
  while (true) {
    let superJump = c[n + 2];
    if (superJump === 0) {
      n += 2;
      total++;
    } else {
      n += 1;
      total++;
    }
    //out
    if (n >= c.length - 1) {
      break;
    }
  }
  return total;
}
jumpingOnClouds([0, 0, 0, 1, 0, 0]);
// 0,0,0,1,0,0 =>3
//0,0,1,0,0,1,0 =>4
//0 1 0 1 0 1 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0 0 0 1 0 1 0 1 0 0 1 0 1 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 1 0 1 0
//45
