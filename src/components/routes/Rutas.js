import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "../itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "../itemdetailcontainer/ItemDetailContainer";
import NavBar from "../navbar/NavBar";
import Cart from "../cart/Cart";
import { FormProvider } from "../../context/formContext";
import { Header } from "../header/Header";

export default function Rutas() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/category/:cat" exact component={ItemListContainer} />
          <Route path="/item/:id" exact component={ItemDetailContainer} />
          <FormProvider>
            <Route path="/cart" exact component={Cart} />
          </FormProvider>
        </Switch>
      </Router>
    </>
  );
}
