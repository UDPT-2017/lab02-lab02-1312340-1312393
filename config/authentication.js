const User = require("../app/db/db").User;

var Authentication = function (req, res, next) {
    User.findById(req.session.userId).then(function (user) {
        if(user){
            req.user = user;
            res.locals.session = user;
            next();
        }
        else{
            req.flash('info', 'Bạn cần phải đăng nhập trước');
            res.redirect('/user/signin');
        }
    })

};

module.exports = Authentication;
