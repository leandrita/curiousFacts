import { getFact } from "./funtions.js";

let factContainer;
let factElement;

test('El boton muestra correctamente el hecho curioso', () => {
    factContainer = document.createElement('fact-container');
    
    const button = document.createElement('button');
    button.innerHTML = 'Hecho curioso';
    button.addEventListener('click', getFact);
});

getFact();

factElement = factContainer.querySelector('fact-container');
expect(getFact()).toBe("Hecho curioso");
expect(factElement).toBeInTheDocument();