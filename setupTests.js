import '@testing-library/jest-dom/extend-expect';

test('example test', () => {
  const element = document.createElement('div');
  element.textContent = 'Hello, World!';
  expect(element).toHaveTextContent('Hello');
});