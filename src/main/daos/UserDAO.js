//do not include db creation here - demo purpose only - move to some common place
const Sequelize = require('sequelize');
const sequelize = new Sequelize('somedbname', 'myuser', 'mypassword', {
    host: 'mydb.somehost.com',
    dialect: 'mysql',
    operatorsAliases: false,
    dialectOptions: {
        dateStrings: true,
        typeCast: function (field, next) { // for reading from database
            if (field.type === 'DATETIME') {
                return field.string()
            }
            return next()
        },
    },
    timezone: "America/New_York"
});

const User = require('../models/USER')(sequelize, Sequelize); //you can do this in many ways

module.exports = {
    getOneUser: function() {
        return new Promise((resolve, reject) => {
            User.findOne().then(user => {

                console.log('user value is '+JSON.stringify(user));
                resolve(user);
            }).catch(err => {
                console.log('error occurred', err);
                reject(err);
            });
        });
    }
};
