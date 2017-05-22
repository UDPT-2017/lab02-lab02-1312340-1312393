var Router = require('express').Router;
const Authentication = require('../config/authentication');
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

    var messageRouter = Router()
        .get('/', controllers.message.index)
        .get('/get', controllers.message.getMessage)
        .get('/sent', controllers.message.sentMessage)
        .get('/new', controllers.message.newMessage)
        .post('/new', controllers.message.createMessage)
        .get('/:id', controllers.message.show);


    var aboutRouter = Router()
        .get('/', controllers.about.index);
    var friendRouter = Router()
        .get('/add', controllers.friend.addFriend)
        .get('/remove', controllers.friend.removeFriend)
        .get('/get', controllers.friend.getFriend)
        .get('/', controllers.friend.index);

    app.use('/user',userRouter);
    app.use('/about', aboutRouter);
    app.use('/message', Authentication, messageRouter);
    app.use('/friend', Authentication, friendRouter);
};
