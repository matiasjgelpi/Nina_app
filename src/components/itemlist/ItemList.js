import Item from "../item/Item";
import "./style.css"

const ItemList = ({array}) => {


  return (
    <>
      <ul className="itemList">

        {array.length === 0  ? "cargando..." :
        array.map((item) => (
              <li key={item.id}>
                <Item
                  producto={item.title}
                  precio={item.price}
                  imagen={item.image}
                  descripcion = {item.description}
                />
              </li>
            ))}
      </ul>
    </>
  );
};

export default ItemList;
