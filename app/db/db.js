const Message = require('../models/Message');
const User = require('../models/User');



User.sync({force:true}).then(function () {
	Message.belongsTo(User, {as: "from", foreignKey: "userId"});
	User.hasMany(Message, {as: "sent", foreignKey: "userId"});
	 Message.belongsTo(User, {as: "to", foreignKey: "toUserId"});
	 User.hasMany(Message, {as: "received", foreignKey: "toUserId"});
	 return Message.sync({force: true});


});
module.exports = {
    User,
    Message
};
