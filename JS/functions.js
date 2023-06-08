const factContainer = document.getElementById("fact-container");
const favoritesList = document.getElementById("favorites-list");

const favoritesArray = [];

function getFact() {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json())
    .then((data) => {
      factContainer.innerHTML = "";

      const factElement = document.createElement("div");
      factElement.classList.add("fact");
      factElement.innerHTML = `
        <p>${data.text}<img class="favorite" src="./img/star.png" alt="Agregar a favoritos" onclick="addToFavorites(event)"></p>
        `;
      factContainer.appendChild(factElement);
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
