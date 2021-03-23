import React from 'react';
import '../css/components/_cart.css';

export const CurrentOrder = ({ order }) => {
  const { name, price, quantity } = order;
  return (
    <div className="current-order">
      <p>{name}</p>
      <p>$ {price}</p>
      <p>&#120; {quantity}</p>
    </div>
  );
};
