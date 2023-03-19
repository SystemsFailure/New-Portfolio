const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connecter')

class messages extends Model {}

messages.init({
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adminId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userEmail: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    paranoid: true,
    sequelize,
    modelName: 'messages'
});

module.exports = messages