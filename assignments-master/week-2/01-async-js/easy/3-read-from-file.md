## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

<!-- const fs = require("fs");
// filesystem external library provided by node.js

function fileReadFunc() {
  fs.readFile("a.txt", "UTF-8", function (err, data) {
    // after read the file the file data comes in data arg. , console it
    console.log(data);
  });
}

fileReadFunc(); // file will goes to read the data and it execute after the bottom code execute
let sum = 0;
for (let i = 0; i < 1000000000; ++i) {
  sum += i;
}
console.log(sum); -->


