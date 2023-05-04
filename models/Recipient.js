const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Recipient extends Model { };

Recipient.init(
    {
        id: {
            type: DataTypes.INTEGER,
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
        },
        emailList_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'EmailList',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'email_list',
    }
);

module.exports = Recipient;
