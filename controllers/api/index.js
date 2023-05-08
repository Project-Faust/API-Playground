const router = require('express').Router();
const usersRoute = require('./users');
const apiSearchRoute = require('./nodeFetch');
const historyRoute = require('./fetchHistory');

router.use('/users', usersRoute);
router.use('/api-search', apiSearchRoute);
router.use('/history', historyRoute);

module.exports = router;