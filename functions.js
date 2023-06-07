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

const mostrarData = (data) => {
    let element = document.getElementById('element');
    element.innerHTML = `<p>${data.text}</p>`;
    console.log(data);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('random');
    button.addEventListener('click', fetchData);
});