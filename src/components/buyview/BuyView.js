import { Link } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";
import { useContext, useEffect } from "react";
import cartContext from "../../context/cartContext";

export const BuyView = ({ mensaje }) => {

const {clearCart} = useContext(cartContext)


  return (
    <div className=" container text-center mt-5 pt-5">
      {mensaje === "" ? (
        <div>
          <Spinner />
          <p>Estamos procesando tu compra, no cierres la ventana</p>
        </div>
      ) : (
        <div className="row  d-flex justify-content-center align-content-center">
          <p>
            Gracias <b>{mensaje.buyer.name}</b>! tu compra se relizó con éxito
          </p>
          <p>
            Comprobante: <b>{mensaje.id}</b>
          </p>
          <p>
            te enviamos la confirmación a: <b>{mensaje.buyer.email}</b>
          </p>

          <Link to="/" className="btn btn-danger col-2" onClick={() => clearCart()}>
            Volver al Inicio
          </Link>
        </div>
        
      )}
    </div>
  );
};
