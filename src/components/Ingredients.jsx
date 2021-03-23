import React from 'react';
import '../css/components/_ingredients.css';

export const Ingredients = ({ ingredients }) => {
  const itemIngredients = Object.keys(ingredients).join(', ');

  return (
    <div className="ingredients">
      <p className="ingredient">{itemIngredients}</p>
    </div>
  );
};
