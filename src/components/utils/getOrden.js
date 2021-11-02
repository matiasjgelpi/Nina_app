
import firebase from "firebase/app";



export const getOrden = (cliente, carrito, total) => {


  const nueva_compra = {
    buyer: cliente,
    items: carrito,
    date: firebase.firestore.Timestamp.now(),
    total: total  
  };

  return nueva_compra


};
