const User = require("../db/db").User;
var aboutController = {

    index: function (req, res) {

        var session = req.session.userId;
        if (session) {
            User.findById(session).then(function (user) {
                res.locals.session = user;
                res.render('about', {
                    page: 'about',
                    user: user
                })

            }).catch(function (e) {
                res.locals = null;
                res.render('about', {
                    page: 'about'
                });
            })

        } else {
            res.render('about', {
                page: 'about'
            })
        }
    }
};

module.exports = aboutController;
