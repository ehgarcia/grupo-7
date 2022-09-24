var express = require('express');
var router = express.Router();
let abmController = require ('../controllers/abmController')


/* GET ABM*/
router.get('/productUpload', abmController.upload);

router.get('/productEdit', abmController.edit);

module.exports = router;