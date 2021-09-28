import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../itemlist/ItemList";
import { getUrl } from "../utils/getUrl";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { cat } = useParams();


  useEffect(() => {
    pedidoProductos(cat);
    
  }, [cat]);

   const pedidoProductos = (categoria) => {


    fetch(getUrl(categoria))
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
