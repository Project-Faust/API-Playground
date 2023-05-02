const express = require('express');
const router = express.Router();

// const apiRoutes = require('./api');
router.get('/', function(req, res) {
    res.render('layouts/main');

});

// router.use('/api', apiRoutes);

module.exports = router;