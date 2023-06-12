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
  
    expect(factElement.tagName).toBe('ARTICLE');
    expect(factElement.classList.contains('fact')).toBe(true);
    expect(factElement.innerHTML).toContain('Sample fact');
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