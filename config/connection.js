const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.JAWSDB_BLACK_URL,
  {
    dialect: 'mysql',
  }
);

module.exports = sequelize;