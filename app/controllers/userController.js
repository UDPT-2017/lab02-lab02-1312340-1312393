const User = require('../db/db').User;
var userController = {
    loadLogin: function(req, res) {
        res.render('user/login')
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
          req.flash('info', 'Tao tai khoan thanh cong');
          res.redirect('/');
        }).catch(function(e){
          req.flash('info', 'Du lieu sai');
          res.redirect('/user/signup');
        }

      )

    },
    signOut: function(req, res){
      req.session.userId = null;
      req.flash('info', 'Dang xuat thanh cong');
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
          req.flash('info', 'Dang nhap thanh cong');
          res.redirect('/');
        }
        else{
          req.flash('info', 'Dang nhap loi');
          res.redirect('/user/login');
        }
      })

    }
};

module.exports = userController;
