const callbacksPromises = require("./src/call")
console.log(callbacksPromises.sync2("carlos"))
callbacksPromises.withCallback("Juan Carlos", callbacksPromises.sync2)
callbacksPromises.withPromise("Emilia Clark")
    .then((value)=> {
        console.log(`hola ${value}`)
    })