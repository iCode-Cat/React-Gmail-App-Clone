const mongoose = require('mongoose');
const { Schema } = mongoose;


const mailSchema = new Schema({

})

const Mails = mongoose.model('mail', mailSchema);
module.exports = Mails;