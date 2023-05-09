const User = require('./User');
const History = require('./History');

User.hasMany(History, {
    foreignKey: 'user_id'
});

History.belongsTo(User);

module.exports = {
    User,
    History
};