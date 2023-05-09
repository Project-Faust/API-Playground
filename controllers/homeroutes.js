const express = require('express');
const router = express.Router();

// * renders main page
router.get('/', (req, res) => {
  try {
    const logged_in = req.session.logged_in || false; // set logged_in to false if not set
    
    res.render('home', { logged_in });
  } catch (err) {
    console.error(err);
  }
});

// /profile render profile if logged in, otherwise render login page
router.get('/dashboard', (req, res) => {
  if (req.session.logged_in) {
    res.render('dashboard', {
      logged_in: req.session.logged_in
    });
  } else {
    return res.redirect('/login');
  }
});

// /login renders /profile if logged in, otherwise render login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/dashboard');
  }
  res.render('login');
});

// /register renders new user registration if not logged in, otherwise redirect to profile
router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    return res.redirect('/dashboard');
  }
  res.render('register');
});

// routes to the about page
router.get('/about', (req, res) => {
  const logged_in = req.session.logged_in || false;
  try {
    
    res.render('about');
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;