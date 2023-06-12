const fetchData = () => {
  let url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      showData(data);
      console.log(data);
    })
    .catch(error => console.log(error));
}

const addToFavorites = (text) => {
  let favoriteList = document.getElementById('favoriteList');
  const favoriteItem = document.createElement('li');
  favoriteItem.textContent = text;
  favoriteItem.classList.add('favoriteItem');
  favoriteList.appendChild(favoriteItem);
  favoriteList.classList.add('favoriteCuriousFact');
  favoriteCuriousFactsList.push(text);
};

const showData = (data) => {
  let randomText = document.getElementById('randomText');
  randomText.innerHTML = `<p>${data.text}</p>`;
  randomText.classList.add('randomCuriousFact');
  let favoriteBtn = document.createElement('button');
  favoriteBtn.innerHTML = '<img src="/img/starBtn.png">';
  favoriteBtn.classList.add('starBtn');
  favoriteBtn.addEventListener('click', () => addToFavorites(data.text));
  randomText.appendChild(favoriteBtn);
  console.log(data);
}

document.addEventListener('DOMContentLoaded', () => {
  const randomBtn = document.getElementById('randomBtn');
  randomBtn.addEventListener('click', fetchData);
});