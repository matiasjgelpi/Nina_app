import { Link } from "react-router-dom";
import CartView from "../cartView/CartView";
import { FormUser } from "../formuser/FormUser";
import { useContext } from "react";
import cartContext from "../../context/cartContext";



export default function Cart() {

  const {clearCart } = useContext(cartContext);


  return (
    <div className="container mt-5 pt-5 ">
      <div className="row no-wrap d-flex justify-content-center">
        <CartView/>
        <FormUser/>
        <Link to="/" className="btn btn-danger col-2 m-2">
          Volver
        </Link>
        <button className="btn btn-danger col-2 m-2" onClick={clearCart}>
            Vaciar Carrito
          </button>
      </div>
    </div>  
  );
}
