const mongoose = require('mongoose');

const services = new mongoose.Schema({
    name: {
           type: String,
           required:[true, "A name must be entered for the service"],
          },

    description: {
            type:String,
            required: [true, "Description for service"],
            },

    serviceCost: {
            type: Number,
            required:[true, "Service cost must be declared"],
           },
    firstImage:
           {
               type: String,
               required:true
           },
    secondImage:
            {
                type: String,
                required:true
            },
    thirdImage:
            {
                type: String,
                required: true
            }
});

const Services = mongoose.model('services', services)
module.exports = Services