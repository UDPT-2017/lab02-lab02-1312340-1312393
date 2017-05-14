var Router = require('express').Router;

var controllers = require('../app/controllers');

module.exports = function(app){

    var indexRouter = Router().get('/', controllers.index.index);
    app.use('/', indexRouter);

    var userRouter = Router()
        .get('/login', controllers.user.loadLogin)
        .get('/signup', controllers.user.loadSignup)
        .post('/signup', controllers.user.postSignup)
        .get('/signOut', controllers.user.signOut)
        .post('/login', controllers.user.signIn)

    app.use('/user',userRouter);
};
