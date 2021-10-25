import { firestore } from "../../firebase";
import firebase from "firebase/app"





export const getOrden = (cliente,carrito, total) => {
  const coleccion = firestore.collection("ordenes");

  const nueva_compra = {
    buyer: cliente,
    items: carrito,
    date: firebase.firestore.Timestamp.now(),
    total: total
  };

  const query = coleccion.add(nueva_compra);
  document.getElementById("mostrarCompra").style.display="block"
  
  query
    .then((res) => {
      console.log(res);
      document.getElementById("mostrarCompra").innerHTML="compra finalizada nro comprobante " + res.id
    })
    .catch((error) => {
      console.log(error);
    });
};
