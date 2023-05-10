// const { History } = require('../../models');
const searchBtn = document.querySelector('#search-button');
const apiDropdown = document.querySelector('#api-dropdown');
const searchInput = document.querySelector('#search-input');
const historyEl = document.querySelector('#fetch-history');
const resultsEl = document.querySelector('#fetch-results');

searchBtn.addEventListener('click', async () => {
    try {
        const apiSel = await apiDropdown.value;
        const searchTerm = await searchInput.value;

        const response = await fetch('/api/api-search/fetch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                api: apiSel,
                search: searchTerm
            })
        });

        const data = await response.json();
        resultsEl.innerHTML = JSON.stringify(data);
    } catch (err) {
        console.error(err);
    }
});

async function loadHistory() {
    try {
        const response = await fetch('/api/history');
        const historyData = await response.json();
        historyEl.innerHTML = '';
        const seen = new Set(); // keep track of seen URLs
        historyData.forEach((historyItem) => {
            if (!seen.has(historyItem.url)) { // check if URL is already seen
                seen.add(historyItem.url);
                const itemEl = document.createElement('button');
                historyEl.appendChild(itemEl);
                itemEl.setAttribute('type', 'button');
                itemEl.classList.add('btn', 'btn-primary', 'text-white', 'm-1');
                itemEl.innerText = historyItem.url;
                itemEl.addEventListener('click', async () => {
                    const response = await fetch('/api/api-search/fetch', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            search: itemEl.innerHTML,
                        }),
                    });
                    const data = await response.json();
                    console.log(typeof data);
                    
                    resultsEl.textContent = JSON.stringify(data, null, 2);
                });
            }
        });
    } catch (err) {
        console.error(err);
    }
};

loadHistory();