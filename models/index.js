const User = require('./User');
const EmailList = require('./EmailList');
const Recipient = require('./Recipient');

User.hasMany(EmailList, {
    foreignKey: 'user_id'
});

EmailList.hasMany(Recipient, {
    foreignKey: 'email_list_id'
});

//maybe we don't need these because of the below 'belongsTo'

// EmailList.belongsTo(User, {
//     foreignKey: {
//         allowNull: false,
//     },
// });

// Recipient.belongsTo(EmailList, {
//     foreignKey: {
//         allowNull: false,
//     },
// });

EmailList.belongsTo(User);
Recipient.belongsTo(EmailList);

module.exports = {
    User,
    EmailList,
    Recipient
};