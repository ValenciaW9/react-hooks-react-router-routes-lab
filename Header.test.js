import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with correct text', () => {
  render(<Header />);

  const headingElement = screen.getByText(/Welcome to the Nutrition App/i);
  const paragraphElement = screen.getByText(/This is the header of our application./i);

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});