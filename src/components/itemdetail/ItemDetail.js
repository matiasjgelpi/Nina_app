import "./style.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
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
            <Link to="/" className="btn btn-primary">
              Volver
            </Link>
          </div>
        </div>
      )} 

    </>
  );
};

export default ItemDetail;
