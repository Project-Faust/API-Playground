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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        }
    });

module.exports = User;
