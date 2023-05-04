const express = require('express');
const router = express.Router();
const EmailList = require('../../models/EmailList');

// get all email lists
router.get('/', async (req, res) => {
    try {
        const emailLists = await EmailList.findAll();
        res.json(emailLists);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});

// get email list by id; if id doesn't exist, return 404 status
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const emailLists = await EmailList.findByPk(id);
        if (!emailLists) {
            return res.status(404).json({ message: 'Email list not found.' })
        };
        res.json(emailLists);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});

// add new email list
router.put('/:id', async (req, res) => {
    try {
        const { name, description } = req.body;
        const id = req.params.id;

        const emailList = await EmailList.findByPk(id);
        if (!emailList) {
            return res.status(404).json({ message: 'Email list not found.' });
        }

        const updatedEmailList = await emailList.update({ name, description });

        res.json(updatedEmailList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;
