//CommonJs - Every file in node is Module (By default)
// Modules- Encapsulated Code (only Share Minimum)

// to define or  declare numerous variables and functions in single js file makes it implementation difficult to handle maintain and solve for any issues 

// so its better to write in separate files and used export-import methods to make this task easier also there are built in modules and third party modules which we most of the time take during implementation  and follows the procedure of import-export
// const john='john'
// const peter='peter'

// const sayHi=(name)=>{
//    console.log(`Hello there ${name}`) 
// }

// sayHi('susan')
// sayHi(john);
// sayHi(peter);

  
const names=require('./4_names');
const sayHi=require('./5_utils');

const data=require("./6_alternative-flavor");

//console.log(data);

//console.log(names);

// sayHi('susan')
// sayHi(names.john);
// sayHi(names.peter);

// Mind Grenade

require('./7_mindgrenade');
