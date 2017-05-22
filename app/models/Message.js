const sequelize = require('../db/connection');
const SQ = require('sequelize');

var Message = sequelize.define('message', {

        title: {
            type: SQ.STRING,
            validate: {
                len: {
                    args: [3],
                    msg: 'Phải có nhiều hơn 3 kí tự!'
                }
            }
        },
        content:{
            type: SQ.STRING,
            validate: {
                len: {
                    args: [10],
                    msg: 'Phải có nhiều hơn 15 kí tự!'
                }
            }
        },
        seen:{
            type: SQ.BOOLEAN,
            defaultValue: false
        }
    })
    ;


module.exports = Message;