// npm - global command , comes with node
// npm --version

// local dependencies - use  it in only this particular project

// npm i <packageName>

// global dependency - use it in any project 
// npm install -g<packageName>
// sudo npm install -g<packageName> (mac)


// there are three ways to install package,json
// package.json - manifest file (stores important info about project/package)
// manual approach (creates package.json in the root, create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

// if we install package that  contains other dependencies then more than 1 files are created in node_modules directory i.e npm i bootstrap
// but some doesnot like npm i lodash


// Note : these are the modules that are taken externally and first downloaded before to use them


const _=require('lodash');

const items =[1,[2,[3,[4]]]];

// lodash has flattendeep method which will falt array 

const newitems=_.flattenDeep(items);

console.log(newitems);


