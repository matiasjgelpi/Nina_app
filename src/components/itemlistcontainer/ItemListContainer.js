import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../itemlist/ItemList";
import { getUrl } from "../utils/getUrl";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    fetch(getUrl(cat))
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  }, [cat]);

  return (
    <>
      <ItemList array={productos} />
    </>
  );
};

export default ItemListContainer;
