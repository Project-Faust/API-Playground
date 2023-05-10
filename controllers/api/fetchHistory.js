const express = require('express');
const router = express.Router();
const History = require('../../models/History');
const sequelize = require('../../config/connection');

// get all history
router.get('/', async (req, res) => {
    try {
        const history = await History.findAll();
        res.json(history);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});

// get history list by id; if id doesn't exist, return 404 status
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const history = await History.findByPk(id);
        if (!history) {
            return res.status(404).json({ message: 'History not found.' })
        };
        res.json(history);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});

// add new history list
router.post('/', async (req, res) => {
    try {
        const historyData = await History.create(req.body);
        res.status(200).json(historyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
