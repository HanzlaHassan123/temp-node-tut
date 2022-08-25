// data from 2 files are  read  into two variables  named first and second then write into 3rd file by variable result

const { readFile, writeFile } = require("fs");

console.log('start');
// when we dont provide utf coding, we will get buffer
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `here is the result: ${first}, ${second} `,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
      //  console.log(result);
      console.log("Done with this Task "); 
      }
    );
  });
});
console.log("Starting next task ");
