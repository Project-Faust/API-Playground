const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/submit-form', async (req, res) => {
    const apiSel = req.body.api;
    const searchTerm = req.body.search;
    const fetchString = apiSel + searchTerm;

    const response = await fetch(fetchString, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const data = await response.json();
    const dataString = JSON.stringify(data);

    const resultsEl = document.querySelector('#fetch-results');
    const searchResults = document.createAttribute('li');
    resultsEl.appendChild(searchResults);
    searchResults.innerHTML(dataString);

    // do something with the response data
});

module.exports = router;