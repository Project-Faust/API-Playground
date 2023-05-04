const router = require('express').Router();
const usersRoute = require('./users');
const emailListRoute = require('./emailLists');
const recipientRoute = require('./recipients');

router.use('/', usersRoute);
router.use('/', emailListRoute);
router.use('/', recipientRoute);

module.exports = router;