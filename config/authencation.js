const User = require('./User');

var serialize = function (req, res, next) {
    var session = req.session.user_id;
    if(session){
        User.findById(req.session.user_id).then(function (user) {
            req.user = user;
            next();
        }).catch(function (e) {
            res.send(e);
        })
    }
    else{
        req.flash('info', 'Bạn cần phải đăng nhập trước');
        res.redirect('/user/sign in');
    }
};

module.exports = serialize;
