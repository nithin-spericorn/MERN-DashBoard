const express = require('express');
const router = express.Router();
const controller = require('./controller');



router.post('', controller.addTickets);
router.get('',controller.findAllTickets)
 

 module.exports = router;