const User = require('../db/db').User;
var userController = {
    loadLogin: function(req, res) {
        res.render('user/login')
    },
    loadSignup: function (req, res) {
        res.render('user/signup')
    }
};

module.exports = userController;
