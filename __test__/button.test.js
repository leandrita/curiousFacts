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

test('Fact should not be repeated in the fact container', () => {
    const factData = { text: 'Random fact' };
    const factElement1 = createFactElement(factData);
    const factElement2 = createFactElement(factData);
  
    displayFact(factElement1);
    displayFact(factElement2);
  
    const factContainer = document.getElementById('randomText');
    const factElements = factContainer.getElementsByClassName('fact');
    expect(factElements.length).toBe(1);
  });
