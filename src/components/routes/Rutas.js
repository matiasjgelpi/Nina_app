import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "../itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "../itemdetailcontainer/ItemDetailContainer";
import NavBar from "../navbar/NavBar";
import Cart from "../cart/Cart";
import { FormProvider } from "../../context/formContext"; 
import { BuyViewContainer } from "../buyviewcontainer/BuyViewContainer";
import { FormUser } from "../formuser/FormUser";
import { TitlePage } from "../titlepage/TitlePage";


export default function Rutas() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={TitlePage} />
          <Route path="/category/:cat" exact component={ItemListContainer} />
          <Route path="/item/:id" exact component={ItemDetailContainer} />
          <FormProvider>
            <Route path="/cart" exact component={Cart} />
            <Route path="/form" exact component={FormUser}/>
            <Route path="/buy" exact component={BuyViewContainer}/>
          </FormProvider>
        </Switch>
      </Router>
    </>
  );
}
