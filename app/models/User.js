const sequelize = require('../db/connection');
const SQ = require('sequelize');

var User = sequelize.define('user', {
        email: {
            type: SQ.STRING,
            allowNull: {
                args: false,
                msg: 'Bạn cần phải nhập email'
            },
            unique: {
                args: true,
                msg: 'Email này đã được sử dụng'
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Đây phải là email thật'
                }
            }

        },
        phone: {
            type: SQ.STRING,
            allowNull: {
                args: false,
                msg: 'Bạn cần phải nhập số điện thoại'
            },
        },
        name: {
            type: SQ.STRING,
            allowNull: {
                args: false,
                msg: 'Bạn cần phải nhập tên'
            }
            ,
            validate: {
                len: {
                    args: [1],
                    msg: 'Tên phải có ít nhất 1 ký tự'
                }
            }

        }
        ,
        password: {
            type: SQ.STRING,
            validate: {
              len: {
                args: [6],
                msg: 'Mật khẩu phải có ít nhất 6 ký tự'
              }
            }
        }
    })
    ;


module.exports = User;
