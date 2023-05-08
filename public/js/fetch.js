const searchBtn = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const apiDropdown = document.querySelector('#api-dropdown');
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
