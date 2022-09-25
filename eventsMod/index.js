
const EventEmitter = require("events");
const events = new EventEmitter();

// events.on("sayMyName", () => {
//     console.log("My name is Arun");
// });
// events.on("sayMyName", () => {
//     console.log("My name is Kumar");
// });
// events.on("sayMyName", () => {
//     console.log("My name is Shah");
// });

events.on("checkPage", (sc,msg)=> {
    console.log(`The server code is ${sc} and the page is ${msg}`);
})

events.emit("checkPage", 200 , "ok");