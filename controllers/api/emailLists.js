const express = require('express');
const router = express.Router();
const EmailList = require('../../models/EmailList');
const sequelize = require('../../config/connection');

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
router.post('/', async (req, res) => {
    try {
        const emailListData = await EmailList.create(req.body);
        res.status(200).json(emailListData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
