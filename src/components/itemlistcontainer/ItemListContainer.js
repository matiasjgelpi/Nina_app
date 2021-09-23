import { useEffect, useState } from "react";
import ItemList from "../itemlist/ItemList";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedidoProductos();
  }, []);

  const pedidoProductos = () => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
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
