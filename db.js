const mongoose = require('mongoose'); //Paquete que permite la comunicacion con la base de datos

const conectDB = () => {

    mongoose.connect('mongodb+srv://lfparra379:1193206973lfparra@luisa.ibx66.mongodb.net/KeyCodeBook?retryWrites=true&w=majority', {

        useNewUrlParser: true,
        useUnifiedTopology: true
    }), (error) => {
        if (error) {
            console.log('Error: ', error);
        } else {
            console.log('Nos conectamos a la DB');
        }
    }
}

/**
 * Module.exports
 * Nos permite exportar una funcion para que pueda ser utilizada en otra parte de nuestro proyecto
 */
module.exports = { conectDB };