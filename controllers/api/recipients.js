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

// get recipient by id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const recipient = await Recipient.findByPk(id);
        if (!recipient) {
            return res.status(404).json({ message: 'Recipient not found' });
        };
        res.json(recipient);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// add new recipient
router.put('/:id', async (req, res) => {
    try {
        const { email, email_list_id } = req.body;
        const id = req.params.id;

        const recipient = await Recipient.findByPk(id);
        if (!recipient) {
            return res.status(404).json({ message: 'Recipient not found.' });
        }
        res.json(recipient);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});

module.exports = router;
