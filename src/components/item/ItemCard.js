import "./style.css";
import { Link } from "react-router-dom";

const ItemCard = ({id, producto, precio, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{producto}</h5>
        <p className="card-text">Precio: {precio}</p>
        <Link to={`/item/${id}`} className="btn btn-primary">
          Ver mas...
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;


