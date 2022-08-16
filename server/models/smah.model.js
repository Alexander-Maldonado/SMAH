const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        // required:[true, 'Name Required']
    },
    email:{
        type: String
    },
    address:{
        type: String,
        // required: [true,'Address Required']
    },
    addAddress:{
        type:String
    },
    city:{
        type:String,
        // required:[true, 'City Required']
    },
    State:{
        type:String,
        // require:[true, 'State Required']
    },
    zipCode:{
        type: Number,
        // required:[true,'Zip Code Required']
    },
    country:{
        type: String,
        // required:[true,'Country Required']
    },
    phoneNumber:{
        type: Number,
        // required:[true,'Contact Number Required']
    },
    cellNumber:{
        type:Number
    },
    referral:{
        type:String
    },
    type:{
        type:String,
        // require: [true, 'Animal Type Required']
    },
    breed:{
        type:String,
        // required:[true, 'Breed Required']
    },
    petName:{
        type: String
    },
    color:{
        type:String,
        // required:[true,'Color of Animal Required']
    },
    dob:{
        type:String
    },
    gender:{
        type:String
    },
    reason:{
        type:String
    },
    prevVeterinary:{
        type:String
    },
},{timestamps:true});



module.exports = mongoose.model('Client', ClientSchema);
