const Message = require('../models/Message');
const User = require('../models/User');
const Friend = require('../models/Friend');

User.sync().then(function () {
    Message.belongsTo(User, {as: "from", foreignKey: "userId"});
    User.hasMany(Message, {as: "sent", foreignKey: "userId"});
    Message.belongsTo(User, {as: "to", foreignKey: "toUserId"});
    User.hasMany(Message, {as: "received", foreignKey: "toUserId"});
    return Message.sync();


}).then(
    function () {
        Friend.belongsTo(User, {as: "from", foreignKey: "userId"});
        Friend.belongsTo(User, {as: "to", foreignKey: "toUserId"});
        User.hasMany(Friend, {as: "friends", foreignKey: "userId"});
        return Friend.sync()
    }
);
module.exports = {
    User,
    Message,
    Friend
};
