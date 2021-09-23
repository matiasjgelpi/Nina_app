import { useEffect, useState } from "react";
import ItemDetail from "../itemdetail/ItemDetail";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    pedidoProducto();
  }, []);

  const pedidoProducto = () => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
      });
  };

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;