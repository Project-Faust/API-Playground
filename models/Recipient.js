const Sequelize = require('sequelize');
const db = require('../config/database');

const Recipient = db.define('Recipient', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email_list_id: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Recipient;
