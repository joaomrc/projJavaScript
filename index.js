// Faz uma requisição HTTP para a API da ESPN
const url = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news";
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Cria um elemento HTML para cada notícia e adiciona à lista
    const newsList = document.getElementById("news-list");
    data.articles.forEach(article => {
      const news = document.createElement("div");
      news.classList.add("news");
      const publishedDate = new Date(article.published);
      const day = publishedDate.getDate();
      const month = publishedDate.toLocaleString('default', { month: 'short' });
      news.innerHTML = `
        <img class="image" src="${article.images[0].url}" alt="Imagem da notícia">
        <h2 class="title">${article.headline}</h2>
        <p class="description">${article.description}</p>
        <div class="news-details">
          <p class="published">${day} ${month} ${publishedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          <p class="author">By ${article.byline}</p>
          <p class="link"><a href="${article.links.web.href}" target="_blank">More</a></p>
        </div>
      `;
      newsList.appendChild(news);
    });
  })
  .catch(error => console.log(error));
