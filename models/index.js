const User = require('./User');
const EmailList = require('./EmailList');
const Recipient = require('./Recipient');

User.hasMany(EmailList, {
    foreignKey: 'user_id'
});

EmailList.hasMany(Recipient, {
    foreignKey: 'email_list_id'
});

EmailList.belongsTo(User);
Recipient.belongsTo(EmailList);

module.exports = {
    User,
    EmailList,
    Recipient
};