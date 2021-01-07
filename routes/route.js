exports.home = function(req,res) {
    res.render('garden-index')
}

exports.category = function(req,res) {
    res.render('garden-category')
}

exports.contact = function(req,res) {
    res.render('garden-contact')
}

exports.detail = function(req,res) {
    res.render('garden-single')
}