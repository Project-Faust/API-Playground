// index.js

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};

// Establish a Sequelize instance and connect to the database
const sequelize = new Sequelize('emails_db', 'name', 'email', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Import all models in the models folder and add them to the db object
fs.readdirSync(__dirname + '/models')
  .filter(file => file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(__dirname + '/models', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Add the User model to the db object
db['User'] = require('./models/users')(sequelize, Sequelize.DataTypes);

// Sync all models with the database
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync()
  .then(() => console.log('Database and tables synchronized...'))
  .catch(err => console.log('Error: ' + err));

// Export the db object and Sequelize instance
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
