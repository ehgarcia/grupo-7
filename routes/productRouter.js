var express = require('express');
var router = express.Router();

let productController = require ('../controllers/productController')

/* GET product cart listing. */
router.get('/cart', productController.cart);


router.get('/details', productController.details);

module.exports = router;