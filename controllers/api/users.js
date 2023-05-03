const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
  // If the user is authenticated, send a 200 status and a success message
  try {
    const user = await User.findOne({ where: { email } });
    const isMatch = user.comparePassword(password);
    if (!user || !isMatch) {
      return res.status(400).json({
        success: false,
        error: 'Username or password is incorrect.',
      });
    }

    req.session.user_id = user.id;
    req.session.logged_in = true;

    return res.json({
      success: true,
      message: 'Successfully logged in!',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
