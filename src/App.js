import React from "react";
import Rutas from "./components/routes/Rutas";
import {CartProvider } from "./context/cartContext";
import "./style.css"


const App = () => {
  return (
    <div>
      <CartProvider>
      <Rutas/>
      </CartProvider>
    </div>
 
  );
};

export default App;
