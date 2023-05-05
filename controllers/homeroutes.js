const express = require('express');
const router = express.Router();

// * renders main page
router.get('/', (req, res) => {
  try {
    res.render('main', { title: 'Main Page' });
  } catch (err) {
    console.error(err);
  }
});

// /profile render profile if logged in, otherwise render login page
router.get('/profile', (req, res) => {
  if (req.session.logged_in) {
    res.render('profile', {
      logged_in: req.session.logged_in
    });
  } else {
    return res.redirect('/login');
  }
});

// /login renders /profile if logged in, otherwise render login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/profile');
  }
  res.render('login');
});

// /register renders new user registration if not logged in, otherwise redirect to profile
router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/profile');
  }
  res.render('register');
});