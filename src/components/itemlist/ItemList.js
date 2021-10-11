import ItemCard from "../item/ItemCard";
import "./style.css"

const ItemList = ({array}) => {


  return (
    <>
      <ul className="itemList">

        {array.length === 0  ? "cargando..." :
        array.map((item) => (
              <li key={item.id} >
                <ItemCard
                  id={item.id}
                  producto={item.name}
                  precio={item.price}
                  imagen={item.img}
                />
              </li>
            ))}
      </ul>
    </>
  );
};

export default ItemList;
