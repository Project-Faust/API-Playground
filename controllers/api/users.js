const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// * gets all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(recipients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// get user by id; if nonexistent, return 404 status
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.findByPk(id);
    if (!users) {
      return res.status(404).json({ message: 'Recipient not found.' });
    };
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// add new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
