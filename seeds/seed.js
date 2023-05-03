const sequelize = require('../config/connection');
const { User, EmailList, Recipient } = require('../models');

const userData = require('./userData.json');
const emailListData = require('./emailListData.json');
const recipientData = require('./recipientData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const Users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const EmailLists = await EmailList.bulkCreate(emailListData);

    const Recipients = await Recipient.bulkCreate(recipientData);

    process.exit(0);
};

seedDatabase();
