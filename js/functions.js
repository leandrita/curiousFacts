let url = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    let element = document.getElementById('element');
    element.innerHTML = `<p>${data.text}</p>`;
    // console.log(data)
}
