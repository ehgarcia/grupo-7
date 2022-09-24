const controller = {
    upload: (req,res) =>{
        res.render('admin/abmProductUpload')
    },
    edit: (req,res) => {
        res.render('admin/abmProductEdit')
    }
}

module.exports = controller