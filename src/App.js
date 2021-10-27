import React from "react";
import Rutas from "./components/routes/Rutas";
import {CartProvider } from "./context/cartContext";
// import "./style.css"


const App = () => {
  return (
    <>
      <CartProvider>
      <Rutas/>
      </CartProvider>
    </>
 
  );
};

export default App;
