import { useEffect, useState } from "react";
// import ItemCount from "../itemcount/ItemCount"
import ItemList from "../itemlist/ItemList";


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedidoProductos();
  }, []);

  const pedidoProductos = () => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  };

  return (
    <>
      <ItemList array={productos} />
    </>
  );
};

export default ItemListContainer;
