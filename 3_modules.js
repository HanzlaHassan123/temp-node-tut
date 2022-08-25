//CommonJs - Every file in node is Module (By default)
// Modules- Encapsulated Code (only Share Minimum)

const names=require('./4_names');
const sayHi=require('./5_utils');

const data=require("./6_alternative-flavor");

require('./7_mindgrenade');

sayHi('susan')
sayHi(names.john);
sayHi(names.peter);

