import React, { useEffect, useState } from 'react';
import { ActiveOrder } from './components/ActiveOrder';
import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

export const App = () => {
  const [menu, setMenu] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [openOrder, setOpenOrder] = useState([]);
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('data.json')
        .then((res) => res.json())
        .then((data) => data);

      let items = [];

      for (const item of response.menu) {
        let disabled = false;
        for (const ingredients in item.ingredients) {
          if (item.ingredients[ingredients] > inventory[ingredients]) {
            disabled = true;
            break;
          }
        }

        for (const ingredients in item.ingredients) {
          if (item.ingredients[ingredients] > response.inventory[ingredients]) {
            disabled = true;
            break;
          }
        }
        item.disabled = disabled;
        items.push(item);
      }

      setInventory(response.inventory);

      setMenu(items);
    };
    getData();
  }, []);
  
  useEffect(() => {
    let items = [];
    for (const item of menu) {
      let disabled = false;
      for (const ingredients in item.ingredients) {
        if (item.ingredients[ingredients] > inventory[ingredients]) {
          disabled = true;
          break;
        }
      }
      item.disabled = disabled;
      items.push(item);
    }

    setMenu(items);
  }, [currentOrder]);

  const handleAdd = (item) => {
    const existingOrder = currentOrder.some((order) => order.name === item.name);
    if (!existingOrder) {
      item.quantity = 1;
      setCurrentOrder([...currentOrder, item]);
    } else {
      const index = currentOrder.findIndex((order) => order.name === item.name);
      const updatedItem = [...currentOrder];
      updatedItem[index].quantity += 1;
      //console.log(updatedItem);
      setCurrentOrder(updatedItem);
    }
    const updateInventory = { ...inventory };
    Object.keys(updateInventory).forEach((inv) => (updateInventory[inv] -= item.ingredients[inv]));
    //console.log(updateInventory);
    setInventory(updateInventory);
  };

  const submitOrder = (props) => {
    const newOrder = {
      orders: currentOrder,
      total: props
    }
    setOpenOrder([...openOrder, newOrder])
    setCurrentOrder([])
  };

  return (
    <div className="wrapper">
      <Header />
      <Menu menu={menu} addOrder={handleAdd} />
      <Cart currentOrder={currentOrder} handleSubmit={submitOrder} />
      <ActiveOrder orders = {openOrder}/>
    </div>
  );
};
