var Router = require('express').Router;

var controllers = require('../app/controllers');

module.exports = function(app){

    var indexRouter = Router().get('/', controllers.index.index);
    app.use('/', indexRouter);
    var userRouter = Router()
        .get('/login', controllers.user.loadLogin)
        .get('/signup', controllers.user.loadSignup);
    app.use('/user', userRouter)

};