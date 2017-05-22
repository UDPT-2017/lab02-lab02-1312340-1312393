const Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Kết nối thành công');
    })
    .catch(function (err) {
        console.log('Không thể kết nối đến database', err);
    });


module.exports = sequelize;
