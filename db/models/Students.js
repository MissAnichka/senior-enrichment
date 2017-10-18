const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define('students', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: 'http://nebula.wsimg.com/d219d7ea808fccc36c10d26ea470be40?AccessKeyId=1D57F09AF6329EE31373&disposition=0&alloworigin=1'
    }
})