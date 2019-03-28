const EventEmiter = require("events");
class MyEmitter extends EventEmiter {}
const myEmitter = new MyEmitter();

myEmitter.on("call", (name, apellido, callback) => {
  callback(name, apellido, "hola at odos");
});

module.exports = myEmitter;
