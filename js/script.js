const apiKey = '64d1fa749aec44f2a25369643c18e627';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('student-info').textContent = '200547547 - Brandon Hann';

    fetchNews();
});

function fetchNews() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey)
        .then(response => response.json())
        .then(data => displayNews(data.articles));
}

function displayNews(articles) {
    const container = document.getElementById('news-container');
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more...</a>
        `;
        container.appendChild(newsItem);
    });
}