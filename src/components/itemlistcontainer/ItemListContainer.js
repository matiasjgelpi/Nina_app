import "bootstrap/dist/css/bootstrap.min.css"
import ItemCount from "../itemcount/ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p className="font-weight-bold font-italic">{greeting}</p>
            <ItemCount stock="10" initial="1" onAdd={(cantItems)=>{ cantItems <= "0" ? console.log("no hay stock disponible") : console.log(cantItems + " items agregados al carrito")}} />
        </div>
    )
}

export default ItemListContainer 

