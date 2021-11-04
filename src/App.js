import React from "react";
import Rutas from "./components/routes/Rutas";
import {CartProvider } from "./context/cartContext";
import "./App.css"


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
