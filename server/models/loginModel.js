const mongoose = require('mongoose');

const login = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const Login = mongoose.model('users', login)
module.exports = Login