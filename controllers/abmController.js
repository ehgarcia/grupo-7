const variables = require("../public/globals")

const controller = {
    upload: (req,res) =>{
        res.render('admin/abmProductUpload', variables)
    },
    edit: (req,res) => {
        res.render('admin/abmProductEdit', variables)
    }
}

module.exports = controller