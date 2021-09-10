import "bootstrap/dist/css/bootstrap.min.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p className="font-weight-bold font-italic">{greeting}</p>
        </div>
    )
}

export default ItemListContainer 