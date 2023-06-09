const fetchData = () => {
  let url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      mostrarData(data);
      console.log(data);
    })
    .catch(error => console.log(error));
}

const addToFavourites = (text) => {
  let favouriteList = [];

  if (localStorage.getItem('favouriteList')) {
    favouriteList = JSON.parse(localStorage.getItem('favouriteList'));
  }

  favouriteList.push(text);

  localStorage.setItem('favouriteList', JSON.stringify(favouriteList));

  console.log('Added to favourites');
}

const mostrarData = (data) => {
  let randomText = document.getElementById('randomText');
  randomText.innerHTML = `<p>${data.text}</p>`;

  let favouriteBtn = document.createElement('button');
  favouriteBtn.textContent = 'Add to favourites';
  favouriteBtn.addEventListener('click', () => addToFavourites(data.text));

  randomText.appendChild(favouriteBtn);

  console.log(data);
}

document.addEventListener('DOMContentLoaded', () => {
  const randomBtn = document.getElementById('randomBtn');
  randomBtn.addEventListener('click', fetchData);
});