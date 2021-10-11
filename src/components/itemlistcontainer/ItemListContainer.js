import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../itemlist/ItemList";
import { getUrl } from "../utils/getUrl";
import { firestore } from "../../firebase";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { cat } = useParams();

  useEffect(() => {

    const coleccion = firestore.collection("productos-nina");
    const query = getUrl(coleccion, cat)
    
    query
      .then((res) => {
        const arrayProductos = res.docs.map(art => {return  {id:art.id, ...art.data()}})
        setProductos(arrayProductos)
      })

      .catch(() => {
        console.log("error no se obtuvieron los productos");
      });
  }, [cat]);

  return (
    <>
      <ItemList array={productos} />
    </>
  );
};

export default ItemListContainer;
