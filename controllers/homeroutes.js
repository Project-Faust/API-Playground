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
})

// router.post('/login', async (req, res) => {
//   // If the user is authenticated, send a 200 status and a success message
//   try {
//     const user = await User.findOne({ where: { email } });
//     const isMatch = user.comparePassword(password);
//     if (!user || !isMatch) {
//       return res.status(400).json({
//         success: false,
//         error: 'Username or password is incorrect.',
//       });
//     }

//     req.session.user_id = user.id;
//     req.session.logged_in = true;

//     res.json({
//       success: true,
//       message: 'Successfully logged in!',
//     });

//     return res.redirect('/profile');
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const user = await User.create({
//       name,
//       email,
//       password
//     });
//   } catch (err) {
//     res.status(500).json({ error: error.message });
//   }
// })






// module.exports = router;
