var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController')


/* GET product. */
router.get('/productCart', productsController.productCard);

module.exports = router;