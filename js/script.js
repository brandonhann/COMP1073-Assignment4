const apiKey = 'b247fdec45274798853eef3147ea0ab9';

// dynamically add student id & name to page
document.getElementById('student-info').textContent = '200547547 - Brandon Hann';

// calls fetchNews() function
fetchNews();

// fetches articles from newsapi.org
function fetchNews() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey) // fetch top headlines for us
        .then(response => response.json()) // convert response to json
        .then(data => displayNews(data.articles)); // call displayNews() function
}

// displays articles on page
function displayNews(articles) {
    const container = document.getElementById('news-container');
    // loop through articles and create news item for each
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more...</a>
        `;
        // append news item to container
        container.appendChild(newsItem);
    });
}