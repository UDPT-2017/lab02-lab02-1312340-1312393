const User = require('../db/db').User;
var indexController = {
    index: function(req, res) {
        var session = req.session.userId;
        if (session) {
            User.findById(session).then(function (user) {
                res.locals.session = user;
                console.log(user.name);
                res.render('index', {
                    page: 'index',
                    user: user
                })

            }).catch(function (e) {
                res.locals = null;
                res.render('index', {
                    page: 'index'
                });
            })

        } else {
            res.render('index', {
                page: 'index'
            })
        }
    }
};

module.exports = indexController;
