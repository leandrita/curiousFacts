// // Importa la función que deseas probar
// const { fetchData } = require('./functions.js');

// // Simula el objeto global 'fetch'
// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () =>
//             Promise.resolve({
//                 text: 'Texto de prueba',
//             }),
//     })
// );

// // Prueba la función fetchData
// test('fetchData llama a fetch y muestra los datos', () => {
//     // Configuración inicial del DOM simulado
//     document.body.innerHTML = `
//     <article id="randomText"></article>
//   `;

//     // Llama a la función fetchData que deseas probar
//     return fetchData().then(() => {
//         // Verifica que fetch haya sido llamado con la URL correcta
//         expect(global.fetch).toHaveBeenCalledWith(
//             'https://uselessfacts.jsph.pl/api/v2/facts/random'
//         );

//         // Verifica que los datos se hayan mostrado correctamente
//         expect(document.getElementById('randomText').innerHTML).toBe(
//             '<p>Texto de prueba</p>'
//         );
//     });
// });



// Importa la función que deseas probar
// const { fetchData, addToFavourites, showData } = require('./functions.js');

// // Prueba la función addToFavourites
// test('addToFavourites agrega un elemento a la lista de favoritos', () => {
//     // Configuración inicial
//     const text = 'Texto de prueba';
//     const favouriteList = document.createElement('ul');

//     // Llama a la función que deseas probar
//     addToFavourites(text, favouriteList);

//     // Verifica que se haya agregado el elemento a la lista de favoritos
//     expect(favouriteList.innerHTML).toBe('<li class="favouriteItem">Texto de prueba</li>');
// });


// Importa la función que deseas probar
const { fetchData } = require('./functions.js');

// Mockea la función fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve({
                text: 'Texto de prueba',
            }),
    })
);

// Prueba la función fetchData
test('fetchData llama a fetch y muestra los datos', () => {
    // Configuración inicial
    const consoleSpy = jest.spyOn(console, 'log');
    const showDataSpy = jest.spyOn(console, 'showData');

    // Llama a la función que deseas probar
    return fetchData().then(() => {
        // Verifica que fetch haya sido llamado con la URL correcta
        expect(global.fetch).toHaveBeenCalledWith(
            'https://uselessfacts.jsph.pl/api/v2/facts/random'
        );

        // Verifica que la función showData haya sido llamada con los datos correctos
        expect(showDataSpy).toHaveBeenCalledWith({ text: 'Texto de prueba' });

        // Verifica que se haya mostrado el resultado en la consola
        expect(consoleSpy).toHaveBeenCalledWith({ text: 'Texto de prueba' });
    });
});