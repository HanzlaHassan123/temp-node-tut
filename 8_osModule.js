
// built in module like os modules helps to get interact with oprating sys and  server 
// for external modules we have to install resources while for built in we dont need to

const os =require('os');

// info about current user

const user=os.userInfo();
console.log(user);

// methods returns the system uptime in Seconds
console.log(`the sytem uptime is  ${os.uptime} seconds`);

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);