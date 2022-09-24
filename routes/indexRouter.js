var express = require('express');
var router = express.Router();
let indexController = require ('../controllers/indexController')
let productsController = require('../controllers/productsController')


/* GET home page. */
router.get('/', indexController.index);


/* GET product. */
router.get('/productCart', productsController.productCard);

module.exports = router;