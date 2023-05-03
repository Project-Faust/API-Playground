const sequelize = require('../config/connection');
const { User, EmailList, Recipient } = require('../models');

const userData = require('./userData.json');
const emailListData = require('./emailListData.json');
const recipientData = require('./recipientData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const EmailLists = await EmailList.bulkCreate(emailListData);

    const recipients = await Recipient.bulkCreate(recipientData);

    process.exit(0);
};

seedDatabase();
