import '@testing-library/jest-dom';

const element = document.createElement('div');
element.textContent = 'Hello, World!';

expect(element).toHaveTextContent('Hello, World!');