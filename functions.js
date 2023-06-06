const factsContainer = document.getElementById("fact-container");
const favoritesList = document.querySelector(".favorites-list");
const factBtn = document.getElementById("fact-button");


factBtn.addEventListener("click", getFact);

let favorites = [];

function getFact() {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json())
    .then((data) => {
      const fact = data.text;
      renderFacts(fact);
      
      
    })
    .catch((error) => console.log(error));
}
function renderFacts() {

facts.forEach(fact => {
    const factElement = document.createElement("li");
    factElement.innerHTML = `
    <p>${fact}<span class="favorite" onclick="addFavorite('${fact}')">★</span></p>`;
  factsContainer.appendChild(factElement);
});
}

function addFavorite(fact) {
  favorites.push(fact);
  renderFavorites();
}
function renderFavorites() {
  favoritesList.innerHTML = "";

  favorites.forEach((fact) => {
    const favoriteElement = document.createElement("li");
    favoriteElement.textContent = fact;
    favoritesList.appendChild(favoriteElement);
  });
}