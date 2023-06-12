const { getFact, addToFavorites, displayFact, createFactElement, fetchFact } = require("../src/functions.js");
function createMockElement() {
  return {
    innerHTML: "",
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
}