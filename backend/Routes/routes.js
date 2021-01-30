const { Router } = require('express');
const router = Router();

//controllers
const serverController = require('../Controllers/serverController')

//routes
router.get('/mail', serverController.mail_get )
router.post('/mail', serverController.mail_post )
router.delete('/mail', serverController.mail_delete )
router.put('/mail', serverController.mail_put )

module.exports = router;