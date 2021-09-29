import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ItemCount from "../itemcount/ItemCount";

const ItemDetail = ({ producto }) => {
  const [carrito, setCarrito] = useState(0);

  const onAdd = (cantidadAAgregar) => {
    console.log("Agregar " + cantidadAAgregar + " al carrito");
    setCarrito(cantidadAAgregar);
  };

  return (
    <>
      {producto.length === 0 ? (
        <p className="d-flex justify-content-center">cargando...</p>
      ) : (
        <div className="card container-fluid">
          <img
            src={producto.image}
            className="card-img-top img-detail"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{producto.title}</h5>
            <p className="card-text">
              {producto.description} Precio: {producto.price}.
            </p>
            <ItemCount stock={20} initial={1} onAdd={onAdd} />
            <Link to="/" className="btn btn-primary">
              Volver
            </Link>
            {carrito === 0 ? (
              ""
            ) : (
              <Link to="/cart" className="btn btn-primary">
                Finalizar Compra
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
