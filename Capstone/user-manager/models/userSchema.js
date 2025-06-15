const mongoose = require('mongoose');

//Creating a Schema
const userSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
})

//Exporting the Schema as a model
module.exports = mongoose.model('User', userSchema)