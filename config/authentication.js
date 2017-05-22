

var Authentication = function (req, res, next) {
   
    console.log(req.session.uniqueID);
    if(req.session.uniqueID){
         res.locals.session = req.user;
        next();
    }
    else{
        req.flash('info', 'Bạn cần phải đăng nhập trước');
        res.redirect('/user/sign in');
    }
};

module.exports = Authentication;
