import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import ItemCount from "../itemcount/ItemCount";
import { Spinner } from "../spinner/Spinner";

const ItemDetail = ({ producto }) => {
  const { addItem, cart } = useContext(cartContext);

  const onAdd = (cantidad) => {
    addItem(producto, cantidad);
  };


  return (
    <div className="d-flex justify-content-center mt-3 pt-4">
      {producto.length === 0 ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-5">
              <img src={producto.img} className="img-fluid" alt="" />
            </div>

            <div className="col-5 row text-center d-flex flex-wrap align-content-center">
              <h5 className="h3 ">{producto.name}</h5>

              <p className="">{producto.description}</p>
              <p className="">Precio: {producto.price}.</p>

              <ItemCount
                stock={20}
                initial={1}
                product={producto}
                onAdd={onAdd}
                className=""
              />
            </div>

            <div className="row d-flex justify-content-center col-3 mt-2">
              <Link to="/cart" className="btn btn-danger btn-sm" style={cart.length === 0 ? {display : "none"} : {display:"block"}}>
                Ir al carrito
              </Link>

              <Link to="/" className="btn btn-danger btn-sm mt-1">
                Volver
              </Link>

              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
