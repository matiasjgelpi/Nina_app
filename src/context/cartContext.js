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

  const removeItem = (item) => {
    cart.push(item);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (art) => {
    return cart.includes(art);
  };

  const valueProvider = {
    addItem: addItem,
  };

  return <Provider value={valueProvider}>{children}</Provider>;
};

export default cartContext;
