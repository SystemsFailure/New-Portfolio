const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:31415@localhost:5432/chat_in_portfolio')

module.exports = sequelize
