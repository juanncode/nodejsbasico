const math = require('./math')
const greet = require('./greetings')
const hello = require('./greetings/greet')

console.log(greet.greet("Carlos"));
console.log(hello.sayHello("Juan carlos"));
console.log(math.add(2,4))
console.log(math.substract(2,4))
console.log(math.multiply(2,4))
console.log(math.divide(2,4))