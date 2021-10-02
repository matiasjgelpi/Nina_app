import { createContext, useState } from "react";

const cartContext = createContext();

const { Provider } = cartContext;

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);


  const addItem = (item, quantity) => {
    if (isInCart(item)) {
      cart.find((it) => it === item).cantidad += parseInt(quantity);
    } else {
      item["cantidad"] = parseInt(quantity);
      cart.push(item);
    }
    console.log(cart);
  };

  // const removeItem = (item) => {
  //   cart.pop(item);
  // };

  const clearCart = () => {
    cart.length = 0
    setCart(cart);
  };

  const isInCart = (art) => {
    return cart.includes(art);
  };

  const valueProvider = {
    addItem: addItem,
    clearCart : clearCart
  };

  return <Provider value={valueProvider}>{children}</Provider>;
};

export default cartContext;
