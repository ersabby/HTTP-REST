const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:false,
        default: new Date()
    }
})

const Contacts = mongoose.model('Contacts',ContactSchema)

module.exports = Contacts