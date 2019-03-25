const callbackAndPromises = {
    sync2: (nombre) => {
        return `Hola ${nombre}! Bienvenido a Node js`;
    },
    withCallback: function(nombre, callback){
        setTimeout(() => {
            console.log(callback(nombre));
            
        }, 5000);
    },
    withPromise: (nombre) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(nombre)
            }, 5000);
        })
    }

}
module.exports = callbackAndPromises