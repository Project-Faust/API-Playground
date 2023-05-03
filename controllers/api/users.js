// users.js
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

// Hash the password before storing it in the database
// const hashPassword = async (req, res, next) => {
//   const { password } = req.body;

//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     req.body.password = hashedPassword;
//     next();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Compare the hashed password with the one provided during login
const comparePassword = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({
        success: false,
        error: 'Username or password is incorrect.',
      });
    }

    // if (!isMatch) {
    //   return res.status(401).json({
    //     success: false,
    //     error: 'Invalid password entered',
    //   });
    // }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

router.post('/login', (req, res) => {
  // If the user is authenticated, send a 200 status and a success message
  return res.json({
    success: true,
    message: 'Successfully logged in!',
  });
});

module.exports = router;
