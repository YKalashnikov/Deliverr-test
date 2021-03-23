import React from 'react';

import '../css/components/_menu.css';
import { Button } from './Button';
import { Ingredients } from './Ingredients';

export const Menu = ({ menu, addOrder }) => {
  return (
    <div className="menu">
      {menu.map((item, index) => {
        return (
          <div key={index} className="menu_item">
            <h3 key={index}>{item.name}</h3>
            <h2>$ {item.price}</h2>
            <Ingredients ingredients={item.ingredients} />
            <Button
              name="Add To Cart"
              className={item.disabled ? 'disabled': 'button'}
              disabled={item.disabled}
              action={() => addOrder(item)}
            />
          </div>
        );
      })}
    </div>
  );
};
