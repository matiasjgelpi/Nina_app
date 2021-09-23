import "./style.css"

const ItemDetail = ({ producto }) => {
    return (
        <>
        {producto.length === 0 ? "cargando..." : 
        
        <div className="card container-fluid">
            <img src={producto.image} className="card-img-top img-detail" alt="" />
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">
                    {producto.description} Precio: {producto.precio}.
                </p>
                <a href="/" className="btn btn-primary">
                    Agregar al carrito
                </a>
            </div>
        </div>}
        </>)
    
}

export default ItemDetail;
