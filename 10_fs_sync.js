const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');
// if  the file is not availabe then nodejs will create file or if it is availabe then nodejs will overwrite
console.log(first,second);
writeFileSync('./content/result-sync.txt',`here is the result : ${first}, ${second}`  ,  {flag:'a'})

// flag is the property which is set to 'a'  means it will appends write method every time during execution and file will be written again and again