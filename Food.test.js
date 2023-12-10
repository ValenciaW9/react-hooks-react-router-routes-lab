import React from 'react';
import { render, screen } from '@testing-library/react';
import Food from './Food';
import { directors } from "../data";


test('renders food component with correct props', () => {
  const foodProps = {
    name: 'Pizza',
    calories: 285,
    ingredients: ['Dough', 'Cheese', 'Tomato Sauce'],
  };

  render(<Food {...foodProps} />);

  const foodNameElement = screen.getByText(/Pizza/i);
  const caloriesElement = screen.getByText(/Calories: 285/i);
  const ingredientsElement = screen.getByText(/Ingredients: Dough, Cheese, Tomato Sauce/i);

  expect(foodNameElement).toBeInTheDocument();
  expect(caloriesElement).toBeInTheDocument();
  expect(ingredientsElement).toBeInTheDocument();
});

export default Food;