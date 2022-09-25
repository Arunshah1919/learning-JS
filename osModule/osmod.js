 const os = require("os");

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.type());

// const freeMemory = os.freemem()
// console.log(`${freeMemory / 1024 / 1024 / 1024}`);

// const totalMemory = os.totalmem()(`${totalMemory / 1024 / 1024 / 1024}`)
 
// //console.log(os.networkInterfaces());
// console.log(os.release());

// const upTime = os.uptime()
// console.log(`${upTime/ 60/60}`);

const Type = os.freemem();
const add = function(a,b){
    return a-b;
}

module.exports = {add,Type};