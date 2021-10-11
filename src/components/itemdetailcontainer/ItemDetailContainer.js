import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../itemdetail/ItemDetail";
import { firestore } from "../../firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const query = firestore.collection("productos-nina").doc(id).get();

    query
      .then((res) => {
        setProducto({id:id,...res.data()});
      })

      .catch(() => {
        console.log("error no se obtuvieron los productos");
      });
  }, [id]);

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
