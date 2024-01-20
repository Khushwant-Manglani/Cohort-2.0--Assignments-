## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

<!-- const fs = require("fs");
// external library filesystem provided by node.js

function fileWriteFunc() {
  fs.writeFile("a.txt", "Hii there put in a.txt", "UTF-8", (err) => {
    if (err) throw new Error();
  });
}

fileWriteFunc(); // write the data in a file after the bottom code execute 

let sum = 0;
for (let i = 0; i < 1000000000; ++i) {
  sum += i;
}
console.log(sum); -->
