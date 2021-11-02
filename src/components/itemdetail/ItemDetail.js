import { useContext } from "react";
import cartContext from "../../context/cartContext";
import "./style.css";
import { Link } from "react-router-dom";
import ItemCount from "../itemcount/ItemCount";
import { Spinner } from "../spinner/Spinner";

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(cartContext);

  const onAdd = (cantidad) => {
    addItem(producto, cantidad);
  };

  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      {producto.length === 0 ? (
        <Spinner/>
      ) : (
        <div className="card">
          <img
            src={producto.img}
            className="card-img-top img-detail"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{producto.name}</h5>
            <p className="card-text">
              {producto.description} Precio: {producto.price}.
            </p>

            <ItemCount stock={20} initial={1} product={producto} onAdd={onAdd} />
            <Link to="/cart" className="btn btn-primary">
              Finalizar Compra
            </Link>

            <Link to="/" className="btn btn-primary">
              Volver
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
