const { productCard } = require("./productsController")

const controller = {
    cart: function(req,res){
        res.render('products/productCart')
    },
    details: function(req,res){
        res.render('products/productDetails')
    },
}

module.exports = controller