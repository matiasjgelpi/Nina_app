import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../itemdetail/ItemDetail";


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([]);
  const {id} = useParams()

  
  useEffect(() => {
    pedidoProducto();
  });

  const pedidoProducto = () => {
    
    fetch(`https://fakestoreapi.com/products/${id}`)
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