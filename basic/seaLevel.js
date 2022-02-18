//UDDDUDUU up down
//input UDDDUDUU,8
// output 1
//we count the number of time we reach the sea level only when we go up
function countingValleys(steps, path) {
  // Write your code here
  // sea level =0 => if it was up=>U, the next step should be down =>D or it's the last element on the array on the seaLevel
  let seaLevel = 0; //the seaLevel will increment when we reach 0 and the next step is the opposite
  let stepTracker = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      stepTracker += 1;
      if (stepTracker === 0) {
        seaLevel++;
      }
    } else stepTracker -= 1;
  }
  return seaLevel;
}
countingValleys(8, "UDDDUDUU");
//DDUUDDUDUUUD,12
//output 2
//UDUUUDUDDD,10
//OUTPUT 0
//UDDDUDUU

//  +1
//-0---0-----------------0
//      -1      +1      +1
//         -1       -1
//
