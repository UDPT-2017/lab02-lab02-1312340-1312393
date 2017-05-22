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
      req.session.destroy(function(){
         res.redirect('/user/signin');
        //req.flash('info', 'Đăng xuất thành công');
   

});
      
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
          var session =req.session;
          req.session.uniqueId = user.id;
          session.uniqueID = user.id;
          //session.uniqueID = req.body.email;
          console.log(session.uniqueId);
          
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
