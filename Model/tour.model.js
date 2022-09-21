const mongoose = require('mongoose');

const tourCreateSchema =  mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    price: {
        type: Number,
        required: true,
        min:0
    },
    country:{
        type:String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const TourCreate = mongoose.model('TourCreate', tourCreateSchema)

module.exports = TourCreate;