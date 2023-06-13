const factContainer = document.getElementById("randomText");
const favoritesList = document.getElementById("favoriteList");
const favoritesArray = [];

function fetchFact() {
  return fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((response) => response.json());
}

function createFactElement(data) {
  const factElement = document.createElement('p');
  factElement.classList.add("randomCuriousFact");
  factElement.textContent = data.text;
  let favoriteBtn = document.createElement('button');
  favoriteBtn.innerHTML = '<img class="star" src="/img/starBtn.png">';
  favoriteBtn.classList.add('starBtn');
  favoriteBtn.addEventListener('click', () => addToFavorites(data));
  factElement.appendChild(favoriteBtn);
  console.log(data);
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

function addToFavorites(data) {
  const favoriteText = data.text;

  if (favoritesArray.includes(favoriteText)) {
    showPopup("This fact already exists in your favorite list.");
    return;
  }

  favoritesArray.push(favoriteText);

  const favoriteElement = document.createElement("li");
  favoriteElement.textContent = favoriteText;
  favoritesList.appendChild(favoriteElement);
}

function showPopup(message) {
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal");
  modalElement.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>${message}</p>
    </div>
  `;

  const closeButton = modalElement.querySelector(".close");
  closeButton.addEventListener("click", () => {
    modalElement.remove();
  });

  document.body.appendChild(modalElement);
}

module.exports = { getFact, addToFavorites, createFactElement, fetchFact };
