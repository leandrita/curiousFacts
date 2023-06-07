const factContainer = document.getElementById('fact-container');
const favoritesList = document.getElementById('favorites-list');

function getFact() {
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {
      factContainer.innerHTML = '';

      const factElement = document.createElement('div');
      factElement.classList.add('fact');
      factElement.innerHTML = `
        <p>${data.text}</p>
        <img class="favorite" src="./img/star.png" alt="Agregar a favoritos" onclick="addToFavorites(event)">
      `;
      factContainer.appendChild(factElement);
    })
    .catch(error => {
      console.log(error);
    });
}

// Función para agregar a favoritos
function addToFavorites(event) {
  const factElement = event.target.parentNode;
  const favoriteElement = document.createElement('li');
  favoriteElement.innerHTML = factElement.innerHTML;
  favoriteElement.querySelector('.favorite').remove();
  favoritesList.appendChild(favoriteElement);
}