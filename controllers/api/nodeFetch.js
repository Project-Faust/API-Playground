const express = require('express');
const router = express.Router();
const { User, History } = require('../../models')
let fetch;

async function getFetch() {
    if (!fetch) {
        const { default: f } = await import('node-fetch');
        fetch = f;
    }
    return fetch;
};

async function insertFetchString(fetchString, userID) {
    try {
        const result = await History.create({
            url: fetchString,
            user_id: userID
        });
        console.log('New row inserted with id:', result.id);
    } catch (err) {
        console.error('Error inserting row:', err);
    }
};

router.post('/fetch', async (req, res) => {
    async function fetchData() {
        const fetchFunc = await getFetch();
        const apiSel = req.body.api;
        const searchTerm = req.body.search;
        let fetchString;

        if (!apiSel || apiSel === '') {
            fetchString = searchTerm;
        } else {
            fetchString = apiSel + searchTerm;
        }

        try {
            const userID = req.session.user_id;
            await insertFetchString(fetchString, userID);
            const response = await fetchFunc(fetchString, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();

            res.send(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    await fetchData();
});

module.exports = router;
