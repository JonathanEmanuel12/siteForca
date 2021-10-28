const Sequelize = require('sequelize');

const sequelize = new Sequelize('conjunto_palavras', 'root', '@Tomate14', { host: 'localhost', dialect: 'mysql' });

module.exports = sequelize;