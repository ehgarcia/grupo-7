const variables = require('../public/globals')
const controller = {
    index: function(req,res){
        res.render('index', variables)
    }
}

module.exports = controller