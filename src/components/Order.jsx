import React, { useState } from 'react';
import '../css/components/_order.css';
import { Button } from './Button';

export const Order = ({ orders, indexEl }) => {
  const [complete, setComplete] = useState(false);

  const handleComplete = () => {
    setComplete(true);
  };

  return (
    <div className="order-wrapper">
      {orders.orders.map((el, index) => {
        return (
          <div key={index} className={`${!complete ? 'order' : 'completeOrder'}`}>
            <p># {indexEl + 1}</p>
            <p>{el.name}</p>
            <p>$ {el.price}</p>
            <p>&#120; {el.quantity}</p>
            <p>Total: $ {orders.total}</p>
            <Button
              className="complete"
              name={!complete ? ` ${'Pick Up'}` : `${'✔ Picked Up'}`}
              action={handleComplete}
              disabled={complete}
            />
          </div>
        );
      })}
      <hr />
    </div>
  );
};
