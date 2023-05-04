const express = require('express');
const router = express.Router();
const Recipient = require('../../models/Recipient');

// * gets all recipients
router.get('/', async (req, res) => {
    try {
        const recipients = await Recipient.findAll();
        res.json(recipients);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});

// get recipient by id; if nonexistent, return 404 status
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const recipient = await Recipient.findByPk(id);
        if (!recipient) {
            return res.status(404).json({ message: 'Recipient not found.' });
        };
        res.json(recipient);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// add new recipient
router.post('/', async (req, res) => {
    try {
        const recipientData = await Recipient.create(req.body);
        res.status(200).json(recipientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
