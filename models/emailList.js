const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class EmailList extends Model {
};

EmailList.init(
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true,
        }
    });

module.exports = User;
