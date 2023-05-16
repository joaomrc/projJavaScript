fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  
  })
  .catch(error => console.error(error));

const firstNewsTitle = data.articles[0].headline;
    console.log(firstNewsTitle);