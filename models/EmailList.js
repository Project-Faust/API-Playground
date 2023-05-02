const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const EmailList = db.define('EmailList', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'email_list',
  }
);

module.exports = EmailList;
