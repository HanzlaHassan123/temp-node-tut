// In Synchronous code is blocked during execution which creates problems i.e when user is reading or writing a file other user will not be able to perform next task until first task is completed which creates latency in response

// const { readFileSync, writeFileSync } = require("fs");
// console.log('start');
// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// //console.log(first, second);
// writeFileSync(
//   "./content/result-sync.txt",
//   `here is the result : ${first}, ${second}`,
//   { flag: "a" }
// );

// console.log("done with thE TASK");
// console.log("Starting the next step ");

// In asychronous code is executed  in non-blacking manner it does not stop to let complete its tasks rather goes next without waiting
const { readFile, writeFile } = require("fs");

console.log("start");
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
