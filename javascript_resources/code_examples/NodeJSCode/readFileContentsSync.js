
/* Module for file reading */
let fs = require("fs");
let fileName = "courseInfo.txt"

/* Notice Sync word in method */
let fileContent = fs.readFileSync(fileName, 'utf-8');
console.log(`Displaying content for file ${fileName}`);
console.log(fileContent);