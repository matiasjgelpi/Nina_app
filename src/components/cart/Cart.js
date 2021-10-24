import React from "react";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import { getOrden } from "../utils/getOrden";
import { FormUser } from "../formuser/FormUser";


export default function Cart() {
  const { cart, removeItem, cartTotal } = useContext(cartContext)

  const getUser = (user) =>{
    getOrden(user, cart, cartTotal())

  }
  
  return (
    <div className="container">
      {cart.length === 0 ? (
        <p>No elementos en el carrito</p>
      ) : (
        cart.map((art) =>
          
          <div className="row" key={art.id}>
            <div className="col">{art.name} </div>
            <div className="col">{art.cantidad} </div>
            <div className="col">precio: {art.price} </div>
            <div className="col">
            <button className="btn btn-primary" onClick={() => {removeItem(art.id)}}>X</button>
            </div>
          </div>
                
      
        ) 
        
      )
      
     }
      <p>Total : {cartTotal()}</p>
      <Link to="/" className="btn btn-primary col">
        Volver
      </Link>
      {cart.length === 0 ? "" : <FormUser onSubmit={getUser}/>}
    </div>
);
}
