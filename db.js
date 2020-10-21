const mongoose = require('mongoose'); //Paquete que permite la comunicacion con la base de datos

const conectDB = () => {
    mongoose.connect('mongodb+srv://lfparra379:1193206973lfparra@luisa.ibx66.mongodb.net/KeyCodeBook?retryWrites=true&w=majority', {
        /**
         * Metodo connect en mongoose -> Permite conectarme a la base de datos y tiene unas opciones que son:
         * 
         * 1--- useNewUrlParser -> Analizar la informacion que se le requiere enviar a mongoDB
         * 2--- useUnifiedTopology -> Escuchar los llamados que hacemos a mongoDB y monitorea que es lo que pasa
         * 3--- callback -> LLamar una funcion dentro de otra funcion
         */
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