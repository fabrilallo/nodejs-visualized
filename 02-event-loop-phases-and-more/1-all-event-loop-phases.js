const fs = require("fs");
const https = require("https");
const net = require("net");

// timers phase
setTimeout(() => {
  console.log("setTimeout");
}, 1000);

setInterval(() => {
  console.log("setInterval");
}, 1000);

// pending callbacks phase
https.get("https://localhost:3000").on("error", (error) => {
  console.log(error.code);
});

// poll phase
fs.readFile(__filename, (error, data) => {
  console.log("fs");
});

https.get("https://google.com", (res) => {
  console.log("http");
});

// check phase
setImmediate(() => {
  console.log("setImmediate");
});

// close phase
/*
*If a socket or handle is closed abruptly (e.g. socket.destroy()), the 'close' event will be emitted in this phase. 
Otherwise it will be emitted via process.nextTick().
*/
const socket = new net.Socket();
socket.destroy().on("close", () => {
  console.log("closing connections");
});
