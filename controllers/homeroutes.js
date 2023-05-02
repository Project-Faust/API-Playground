const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});



router.get('/profile', (req, res) => {
  res.render('profile', {
      logged_in: req.session.logged_in
  });
});



router.get('/login', (req, res) => {
  if (req.session.logged_in) {
      return res.redirect('/profile');
  }
  res.render('login');
});










module.exports = router;
