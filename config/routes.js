var Router = require('express').Router;

var controllers = require('../app/controllers');

module.exports = function(app){

    var indexRouter = Router().get('/', controllers.index.index);
    app.use('/', indexRouter);

    var userRouter = Router()
        .get('/signin', controllers.user.loadSignin)
        .get('/signup', controllers.user.loadSignup)
        .post('/signup', controllers.user.postSignup)
        .get('/signOut', controllers.user.signOut)
        .post('/signin', controllers.user.signIn)

    var aboutRouter = Router()
        .get('/', controllers.about.index);

    app.use('/user',userRouter);
    app.use('/about', aboutRouter);
};
