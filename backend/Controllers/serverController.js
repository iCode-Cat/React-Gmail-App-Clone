const Mail = require('../Models/mailSchema');

//Find registered mails
exports.mail_get = async (req, res) => {
    const find = await Mail.find()
    .then((result) => {res.json(result)})
}

//Save mails to the database
exports.mail_post = async (req, res) => {

   const save = await Mail.create(req.body)
   console.log(save);
}

exports.to_post = async (req, res) => {

    const mail = req.body.mail;
    console.log(mail);
    const find = await Mail.find({receiver:mail})
    console.log(find);
    
 }
exports.mail_delete = (req, res) => {
    Mail.deleteMany({})
    .then((result)=> res.json(result) )
    .catch((err)=> res.json(err) )
}
exports.mail_put = (req, res) => {
    res.json('Update post')
}