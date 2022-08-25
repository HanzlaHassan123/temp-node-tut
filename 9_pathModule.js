
// our application is run in different environment so to keep track of path is important

const path=require('path');
console.log(path.sep);

// to get sequence of paths 
const filePath=path.join('/content/','subfolder','test.txt')

console.log(filePath)

// to directly get base file 
const base=path.basename(filePath);

console.log(base);

// path resolve give absolute path

const absolute=path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolute);


