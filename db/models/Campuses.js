const Sequelize = require('sequelize');
const db = require('../');

module.exports = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: 'https://wyncode.co/wp-content/uploads/2014/08/31.jpg'
    }
})