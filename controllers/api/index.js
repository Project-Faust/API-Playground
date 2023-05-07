const router = require('express').Router();
const usersRoute = require('./users');
const emailListRoute = require('./emailLists');
const recipientRoute = require('./recipients');

router.use('/users', usersRoute);
router.use('/email-list', emailListRoute);
router.use('/recipient', recipientRoute);

module.exports = router;