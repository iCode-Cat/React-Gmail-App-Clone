const mongoose = require('mongoose');
const { Schema } = mongoose;


const mailSchema = new Schema({

    sender:{type:String, required:1},
    receiver:{type:String},
    subject:{type:String},
    content:{type:String},
    date:{type:String},
    status:{type:String},
    visited:{type:String}
    
})

const Mails = mongoose.model('mail', mailSchema);
module.exports = Mails;