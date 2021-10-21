import { firestore } from "../../firebase";
import firebase from "firebase/app"





export const getOrden = (cliente,carrito, total) => {
  const coleccion = firestore.collection("ordenes");

  const nueva_compra = {
    // buyer: {
    //   name: "Matias",
    //   tel: "1111111111",
    //   email: "matias@mail.com",
    // },
    buyer: cliente,
    items: carrito,
    date: firebase.firestore.Timestamp.now(),
    total: total
  };

  const query = coleccion.add(nueva_compra);

  query
    .then((res) => {
      console.log(res.id);
      alert("compra finalizada nro comprobante " + res.id)
    })
    .catch((error) => {
      console.log(error);
    });
};
