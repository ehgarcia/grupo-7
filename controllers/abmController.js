const variables = require("../public/globals")

const controller = {
    upload: function(req,res){
        res.render('admin/abmProduct', variables)
    }
}

module.exports = controller