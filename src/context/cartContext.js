import { createContext, useState } from "react";

const cartContext = createContext();

const { Provider } = cartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const cartAux = [...cart];
  

  const addItem = (item, quantity) => {
  
    if (isInCart(item)) {
      // console.log(item.id)
      cartAux.find((it) => it.id === item.id).cantidad += parseInt(quantity);
      setCart(cartAux)
    } else {
      item["cantidad"] = parseInt(quantity);
      cartAux.push(item);
      // console.log(cartAux)
      setCart(cartAux)
    }
  };

  const removeItem = (id) => {    
    const nuevoCart = cartAux.filter((it) => it.id !== id);
    setCart(nuevoCart);
  };

  const clearCart = () => {
    cartAux.length = 0;
    setCart(cartAux);
  };

  const isInCart = (art) => {
    const findArt = cartAux.find((it) => it.id === art.id);
    return cartAux.includes(findArt);
  };

  const cartCounter = () => {
    return cartAux.length !== 0 ? cartAux.map((art) => art.cantidad).reduce((a,b) => a+b) : 0 
  };

  const cartTotal =() => {
    
    return cartAux.length !== 0 ? cartAux.map((art) => art.price*art.cantidad).reduce((a,b) => a+b) : 0
  }

  const valueProvider = {
    addItem: addItem,
    clearCart: clearCart,
    cart: cartAux,
    removeItem: removeItem,
    cartCounter: cartCounter,
    cartTotal : cartTotal
  };

  return <Provider value={valueProvider}>{children}</Provider>;
};

export default cartContext;
