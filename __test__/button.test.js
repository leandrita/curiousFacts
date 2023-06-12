
const {
  getFact,
  addToFavorites,
  displayFact,
  createFactElement,
  fetchFact,
} = require('../src/functions.js');


describe('Fact App', () => {
  test('getFact should be a function', () => {
    expect(typeof getFact).toBe('function');
  });

  test('addToFavorites should be a function', () => {
    expect(typeof addToFavorites).toBe('function');
  });

});


test('fetchFact should fetch a random fact', () => {
  // Mock the fetch function to return a sample response
  global.fetch = jest.fn().mockResolvedValue({  //función simulada se utilizará para reemplazar el comportamiento de fetch 
    json: jest.fn().mockResolvedValue({ text: 'Sample fact' }), //simula la respuesta JSON que obtendrías de la solicitud HTTP
  });

  return fetchFact().then((result) => {
    expect(result.text).toBe('Sample fact');
    expect(fetch).toHaveBeenCalledWith(
      'https://uselessfacts.jsph.pl/random.json?language=en'
    );
  });
});

test('createFactElement should create a fact element', () => {
  const data = { text: 'Sample fact' };
  const factElement = createFactElement(data);

  expect(factElement.tagName).toBe('DIV');
  expect(factElement.classList.contains('fact')).toBe(true);
  expect(factElement.innerHTML).toContain('Sample fact');
});



test('displayFact should update the fact container with the given fact element', () => {
  
  const factContainer = document.createElement('div');
  const factElement = document.createElement('div');
  factElement.innerText = 'Sample fact';

  const { document } = new JSDOM();
  global.document = document;
  document.getElementById = jest.fn().mockReturnValue(factContainer);

  displayFact(factElement);

  expect(factContainer.innerHTML).toContain('Sample fact');
});