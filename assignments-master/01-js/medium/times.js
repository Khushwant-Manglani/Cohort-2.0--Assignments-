/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSum(s, e) {
    let sum = 0;
    for (let i = s; i <= e; ++i) {
      sum += i;
    }
    return sum;
}
  
function calculateTime(n) {
    const dateBefore = new Date();
    const timeBeforeInMS = dateBefore.getTime(); // getTime give time in milliseconds
  
    calculateSum(1, n);
  
    const dateAfter = new Date();
    const timeAfterInMS = dateAfter.getTime(); // getTime give time in milliseconds;
  
    return (timeAfterInMS - timeBeforeInMS)/1000; // convert MilliSec to Sec
}
  
console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));
  