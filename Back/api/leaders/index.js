const express = require('express');
const router = express.Router();
const controller = require('./controller');



router.post('', controller.addLeaders);
router.get('',controller.findAllLeaders)
 

 module.exports = router;