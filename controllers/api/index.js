const router = require('express').Router();
const homeroute = require('./homeroute.js')

router.use('/home', homeroute);

module.exports = router;