const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: Boolean, required: true }
    /**
     * Campos Boolean
     * 0 => false
     * 1 => true
     */
});

module.exports = mongoose.model('Genre', genreSchema)