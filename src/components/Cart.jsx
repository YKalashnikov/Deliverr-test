import React, { useState, useEffect } from 'react';
import '../css/components/_cart.css';
import { Button } from './Button';
import { CurrentOrder } from './CurrentOrder';

export const Cart = ({ currentOrder, handleSubmit }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let orderSum = 0;
    currentOrder.forEach((order) => {
      orderSum += order.price * order.quantity;
    });
    setTotal(orderSum.toFixed(2));
  }, [currentOrder]);

  const handleSubmitOrder = () => {
    handleSubmit(total);
    setTotal(0);
  };
  if (!currentOrder.length) {
    return '';
  }
  return (
    <div className="cart">
                <h1>Cart</h1>
      {currentOrder.map((order, index) => (
        <div key={index} className="current-orders">
          <CurrentOrder order={order} />
        </div>
      ))}
      <div className="current-order-total">
        <hr />
        {total > 0 && <p>Total: $ {total}</p>}
        <Button
          name="Place the Order"
          className="button cta"
          action={() => handleSubmitOrder(total)}
        />
      </div>
    </div>
  );
};
