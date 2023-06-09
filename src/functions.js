const factContainer = document.getElementById("randomText");
const favoritesList = document.getElementById("favoriteText");

const favoritesArray = [];

function fetchFact() {
  return fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json());
}

function createFactElement(data) {
  const factElement = document.createElement("article");
  factElement.classList.add("fact");
  factElement.innerHTML = `
    <p>${data.text}<img class="favorite" src="./img/star.png" alt="Agregar a favoritos" onclick="addToFavorites(event)"></p>
  `;
  return factElement;
}

function displayFact(factElement) {
  factContainer.innerHTML = "";
  factContainer.appendChild(factElement);
}

function getFact() {
  fetchFact()
    .then((data) => {
      const factElement = createFactElement(data);
      displayFact(factElement);
    })
    .catch((error) => {
      console.log(error);
    });
}

function addToFavorites(event) {
  const factElement = event.target.parentNode;
  const favoriteText = factElement.innerText;

  if (favoritesArray.includes(favoriteText)) {
    alert("Este hecho ya está en la lista de favoritos.");
    return;
  }

  favoritesArray.push(favoriteText);

  const favoriteElement = document.createElement("li");
  favoriteElement.innerHTML = favoriteText;

  favoritesList.appendChild(favoriteElement);
}

 module.exports = { getFact, addToFavorites, displayFact, createFactElement, fetchFact };
