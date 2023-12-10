import React from 'react';
import Food from './Food.js';

function FoodItem({ name, calories, ingredients }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <p>Ingredients: {ingredients.join(', ')}</p>
    </div>
  );
}

export default FoodItem;