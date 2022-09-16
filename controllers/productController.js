const variables = require('../public/globals')

const controller = {
    cart: function(req,res){
        res.render('products/productCart', variables)
    },
    details: function(req,res){
        res.render('products/productDetails', variables)
    },
}

module.exports = controller