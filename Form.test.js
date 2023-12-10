import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormComponent from './FormComponent';

test('form submission with input value', () => {
  render(<FormComponent />);

  const foodNameInput = screen.getByLabelText('Food Name:');
  const submitButton = screen.getByText('Add');

  fireEvent.change(foodNameInput, { target: { value: 'Pizza' } });
  fireEvent.click(submitButton);

  // Assert your form submission logic here
  // For example, you can check if the form submission is handled correctly
  expect(/* Your assertion here */).toBe(/* Expected result */);
});