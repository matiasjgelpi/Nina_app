import NavBar from "./components/navbar/NavBar";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "./components/itemdetailcontainer/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Nina App</h1>
        <NavBar />
        <ItemListContainer/>
        <ItemDetailContainer/>
      </header>
    </BrowserRouter>
  );
};

export default App;
