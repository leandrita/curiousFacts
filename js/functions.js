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

const addToFavourites = (text) => {
  let favouriteList = document.getElementById('favouriteList');
  const favouriteItem = document.createElement('li');
  favouriteItem.textContent = text;
  favouriteItem.classList.add('favouriteItem');
  favouriteList.appendChild(favouriteItem);
  favouriteList.classList.add('favouriteCuriousFact');
  favouriteCuriousFactsList.push(text);
};

const showData = (data) => {
  let randomText = document.getElementById('randomText');
  randomText.innerHTML = `<p>${data.text}</p>`;
  randomText.classList.add('randomCuriousFact');
  let favouriteBtn = document.createElement('button');
  favouriteBtn.innerHTML = '<img src="/img/starBtn.png">';
  favouriteBtn.classList.add('starBtn');
  favouriteBtn.addEventListener('click', () => addToFavourites(data.text));
  randomText.appendChild(favouriteBtn);
  console.log(data);
}

document.addEventListener('DOMContentLoaded', () => {
  const randomBtn = document.getElementById('randomBtn');
  randomBtn.addEventListener('click', fetchData);
});