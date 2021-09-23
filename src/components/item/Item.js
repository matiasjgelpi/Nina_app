import "./style.css";

const Item = ({ producto, precio, imagen}) => {
  return (
    <div className="card container-fluid">
      <img src={imagen} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{producto}</h5>
        <p className="card-text">
           Precio: {precio}.
        </p>
        <a href="/" className="btn btn-primary">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};

export default Item;
