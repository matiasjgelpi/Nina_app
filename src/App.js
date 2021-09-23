import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import {BrowserRouter} from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Nina App</h1>
        <NavBar />
        <ItemListContainer greeting="" />
      </header>
    </BrowserRouter>
  );
};

export default App;
