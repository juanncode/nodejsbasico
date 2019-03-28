const greet = require("./greet");

greet.emit("call", "jc", "ortiz", (name, apellido, string) => {
  console.log(`hola 2 ${name} ${apellido} ${string}`);
});
