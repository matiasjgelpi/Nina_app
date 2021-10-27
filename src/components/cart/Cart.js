import React from "react";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import { FormUser } from "../formuser/FormUser";
import CartView from "../cartView/CartView";

export default function Cart() {
  const {cart} = useContext(cartContext)

  return (
    <div className="container mt-5 pt-5 text-center">
      {cart.length === 0 ? <span>No hay elementos en el carrito</span> : <CartView/>}

      <Link to="/" className="btn btn-primary col">
        Volver
      </Link>
      {cart.length === 0 ? "" : <FormUser/>}
      <div id="mostrarCompra" style={{ display: "none"}} className="spinner-border" role="status"/>
    </div>
);
}

