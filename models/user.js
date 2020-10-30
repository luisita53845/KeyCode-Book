const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, requires: true },
    birthDate: { type: Date },
    age: { type: Number }
})

module.exports = mongoose.model('User', userSchema)