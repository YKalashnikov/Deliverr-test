import React from 'react';
import { Order } from './Order';

export const ActiveOrder = ({ orders }) => {
  return (
    <div className="active-order">
            {orders.length > 0 && <h1>Orders</h1>}
      {orders.map((order, index) => {
       return  <Order orders={order} key={index} indexEl={index}/>;
      })}
    </div>
  );
};
