import "bootstrap/dist/css/bootstrap.min.css"
import ItemCount from "../itemcount/ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p className="font-weight-bold font-italic">{greeting}</p>
            <ItemCount stock="80" initial="0"/>
        </div>
    )
}

export default ItemListContainer 