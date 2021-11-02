import { Link } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

export const BuyView = ({ mensaje }) => {
  const { clearCart } = useContext(cartContext);

  return (
    <div className= " container text-center mt-5 pt-5">
      {mensaje === "" ? (
        <Spinner />
      ) : (
        <div className="row  d-flex justify-content-center">
          <p>
            Gracias <b>{mensaje.buyer.name}</b>! tu compra se relizó con éxito
          </p>
          <p>
            Comprobante: <b>{mensaje.id}</b>
          </p>
          <p>
            te envviamos la confirmación a: <b>{mensaje.buyer.email}</b>
          </p>
          <Link
          to="/"
          onClick={() => {clearCart()}}
          className="btn btn-primary col-2">
          Volver al Inicio
        </Link>
        </div>
      )}
    </div>
  );
};
