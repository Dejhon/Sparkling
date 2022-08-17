const mongoose = require('mongoose');

const booking = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    serviceBooked:{
        type:String,
        required:true
    },
    serviceCharge:{
        type:Number,
        required: true
    },
});

const Booking = mongoose.model('bookings', booking)
module.exports = Booking