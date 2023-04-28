const router = require('express').Router();

router.get('/', (req, res) =>{
    try {
        res.render('main', { title: 'Main Page' });
    } catch(err) {
        console.error(err);
    }
});

module.exports = router;