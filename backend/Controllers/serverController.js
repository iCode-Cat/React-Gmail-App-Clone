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
exports.mail_delete = (req, res) => {
    res.json('Delete post')
}
exports.mail_put = (req, res) => {
    res.json('Update post')
}