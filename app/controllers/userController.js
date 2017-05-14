const User = require('../db/db').User;
var userController = {
    loadSignin: function(req, res) {
        res.render('user/signin')
    },
    loadSignup: function (req, res) {
        res.render('user/signup')
    },
    postSignup: function (req,res){
        var user = User.build({});
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save().then(function(user){
          req.session.userId = user.id;
          req.flash('info', 'Tạo tài khoản thành công');
          res.redirect('/');
        }).catch(function(e){
          req.flash('info', 'Nhập dữ liệu sai');
          res.redirect('/user/signup');
        }

      )

    },
    signOut: function(req, res){
      req.session.userId = null;
      req.flash('info', 'Đăng xuất thành công');
      res.redirect('/');
    },
    signIn: function (req,res) {
      User.findOne({
        where:{
          email: req.body.email,
          password: req.body.password

        }
      }).then(function(user){

        console.log(user);
        if (user){
          req.session.userId = user.id;
          req.flash('info', 'Đăng nhập thành công');
          res.redirect('/');
        }
        else{
          req.flash('info', 'Đăng nhập thất bại');
          res.redirect('/user/signin');
        }
      })

    }
};

module.exports = userController;
