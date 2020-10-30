const mongoose = require('mongoose'); //Paquete que permite la comunicacion con la base de datos
const config = require('./config');

const conectDB = () => {

    mongoose.connect(config.mongoDB, {

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