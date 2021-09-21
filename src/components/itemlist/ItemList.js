import Item from "../item/Item";

const ItemList = ({ array }) => {

  return (
    <>
      <ul>
        {array === "" ? "no hay nada para mostrar" : array.map((item) => (
              <li key={item.id}>
                <Item
                  producto={item.nombre}
                  precio={item.precio}
                  imagen={item.img}
                />
              </li>
            ))}
      </ul>
    </>
  );
};

export default ItemList;
