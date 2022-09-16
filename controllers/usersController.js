const variables = require("../public/globals")

const controller = {
    login: function(req,res){
        res.render('users/login', variables)
    },
    register: function(req,res){
        res.render('users/register', variables)
    }
}

module.exports = controller