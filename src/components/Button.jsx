import React from 'react';
import '../css/components/_button.css';

export const Button = ({ name, className, action, disabled }) => {
  return (
    <button className={`${className}`} onClick={action} disabled={disabled}>
      {name}
    </button>
  );
};
