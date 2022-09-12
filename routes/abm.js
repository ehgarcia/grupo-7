var express = require('express');
var router = express.Router();
let abmController = require ('../controllers/abmController')


/* GET ABM*/
router.get('/product', abmController.upload);


module.exports = router;