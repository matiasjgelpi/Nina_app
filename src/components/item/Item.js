import "bootstrap/dist/css/bootstrap.min.css"

const Item = ({ producto, precio, imagen }) => {
    return (
        <div className="container">
            <div className="row col-md-5"><img alt={imagen} /></div>
            <div className="row col-md-5"><h1>{producto}</h1></div>
            <div className="row col-md-5"><h1>{precio}</h1></div>


        </div>
    )
}

export default Item
