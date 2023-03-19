const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connecter')

class customers extends Model {}

customers.init({
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
}, {
  sequelize,
  modelName: 'customers'
});

module.exports = customers