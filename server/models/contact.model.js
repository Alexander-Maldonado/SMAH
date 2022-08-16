const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    fullName:{
        type:String,
        // required:[true,'Full Name Required']
    },
    number:{
        type:Number,
        // required:[true,'Contact Number Required']
    },
    emailContact:{
        type:String
    },
    message:{
        type:String,
        // required:[true, 'Please Leave a Comment']
    },
},{timestamps:true});

module.exports = mongoose.model('Contact', ContactSchema);