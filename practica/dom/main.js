const loadButton = document.getElementById('loadInfo');

const articleTemplate = document.querySelector('#article');

const renderArticle = (name, url) => {
  const clone = articleTemplate.content.cloneNode(true);
  const figCaption = clone.querySelector('figcaption');
  const img = clone.querySelector('img');
  figCaption.textContent = name;
  img.src = url;
  img.title = name;
  img.alt = name;
  document.body.appendChild(clone);
};

loadButton.addEventListener('click', async event => {
  const response = await fetch('https://api-football-standings.azharimm.site/leagues');
  const responseData = await response.json();
  const leagues = responseData.data;
  leagues.forEach(league => {
    renderArticle(league.name, league.logos.light);
  });
  event.target.disabled = true;
});
