## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

Code -

<!-- // Note - we have to create a file - a.txt and input is come in that. -->

<!-- const fs = require("fs");

function removeSpacesInWords(data) {
  let newData = "";
  for (let i = 0; i < data.length; ++i) {
    if (data[i] !== " ") {
      while (i < data.length && data[i] !== " ") {
        newData += data[i++];
      }
      newData += " ";
    }
  }

  if (!newData.length) return "";
  return newData.slice(0, newData.length - 1);
}

function fileReadFunc(file) {
  return new Promise( (resolve) => {
    fs.readFile(file, "UTF-8", (err, data) => {
      if(!err) {
        resolve(data);
      }
    });
  });
}

function fileWriteFunc(file, data) {
  fs.writeFile(file, data, "UTF-8", (err) => {
    if (err) throw new Error();
  });
}

async function executeAllFunc() {
  // create file and assign it in var file
  let file = "a.txt";
  // extract data by read
  let data = await fileReadFunc(file);
  // remove extra space present between words
  let spaceRemoveData = removeSpacesInWords(data);
  // Update the spaceRemoveData in file by write
  fileWriteFunc(file, spaceRemoveData);
  // After removing spaces extract data by read and console it.
  fileReadFunc(file)
    .then( (data) => {
      console.log(data);
    });
}

executeAllFunc(); -->
