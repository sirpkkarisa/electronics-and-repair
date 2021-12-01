const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Users = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Provide First Name']
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Provide Last Name']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Provide Email']
    },
    hash: {
        type: String,
        required: [true, 'Hash Password Required']
    },
    salt: {
        type: String,
        required: [true, 'Some Salt Required']
    },
    resetPassToken: {
        type: String,
        default: null
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = {
    Users: mongoose.model('Users', Users)
}
