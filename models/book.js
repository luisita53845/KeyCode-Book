const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true }, //Nombre Libro 
    author: { type: String, required: true }, //Nombre del autor
    pageNumber: { type: Number }, // Número de páginas
    publisher: { type: String, require: true }, //Editorial
    publicationDate: { type: Date }, //Fecha de Publicacion
    //genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' } // Un libro puede tener un genero
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }] // Un libro puede tener muchos generos, las llave influye 

});

module.exports = mongoose.model('Book', bookSchema);

/**
 * Relaciones en Moongo
 * 
 * { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' } -> Solo un genero -> 'idUno'
 * 
 * { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' } -> Muchos generos -> ['idUno', 'idDos']
 */