import {jest} from '@jest/globals';
const { JSDOM } = require('jsdom');
const {
  getFact,
  addToFavorites,
  createFactElement,
  fetchFact,
} = require('../src/functions.js');

describe('archivo functions', () => {
  test('data se imprime', async () => {
    //Arrange
    const dom = await JSDOM.fromFile('index.html');
    //Act
    const element = dom.window.document.querySelector('h1'); //accedo al dom virtual
    
    //Assert
    Assert.equal(element.text, 'Welcome to our page!');
  })

  test('data se imprime', async () => {
    //Arrange
    const dom = await JSDOM.fromFile('index.html');
    //Act
    const element = dom.window.document.getElementById('randomBtn'); //accedo al dom virtual
    
    //Assert
    Assert.equal(element.innerHTML, 'Click here to read a random curious fact!');
  })
});

describe('Fact App', () => {
  test('getFact should be a function', () => {
    expect(typeof getFact).toBe('function');
  });

  test('addToFavorites should be a function', () => {
    expect(typeof addToFavorites).toBe('function');
  });

});


test('fetchFact should fetch a random fact', () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ text: 'Sample fact' }),
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

  expect(factElement.tagName).toBe('P');
  expect(factElement.classList.contains('randomCuriousFact')).toBe(true);
  expect(factElement.innerHTML).toContain('Sample fact');
});