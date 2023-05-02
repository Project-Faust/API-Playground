const router = require('express').Router();
const homeroute = require('./homeRoute.js')

router.use('/home', homeroute);

module.exports = router;