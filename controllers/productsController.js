const variables = require("../public/globals")

const controller = {
    productCard: function(req,res){
        res.render('products/productCart', variables)
    }
}

module.exports = controller