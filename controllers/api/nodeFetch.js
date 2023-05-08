const express = require('express');
const router = express.Router();
let fetch;

async function getFetch() {
    if (!fetch) {
        const { default: f } = await import('node-fetch');
        fetch = f;
    }
    return fetch;
}

router.post('/fetch', async (req, res) => {
    async function fetchData() {
        const fetchFunc = await getFetch();
        const apiSel = req.body.api;
        const searchTerm = req.body.search;
        const fetchString = apiSel + searchTerm;

        try {
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
