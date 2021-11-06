import { useContext, useState, useEffect } from "react";
import cartContext from "../../context/cartContext";
import formContext from "../../context/formContext";
import { BuyView } from "../buyview/BuyView";
import { getOrden } from "../utils/getOrden";
import { firestore } from "../../firebase";



export const BuyViewContainer = () => {
  const { form } = useContext(formContext);
  const { cart, cartTotal} = useContext(cartContext);
  const [compra, setCompra] = useState("")

    
    useEffect(() => {
      const coleccion = firestore.collection("ordenes");
      let compraAux = getOrden(form, cart, cartTotal())
  
      const query = coleccion.add(compraAux);
   
      query
        .then((res) => {
          const id = res.id
          compraAux = {id:id, ...compraAux}
          setCompra(compraAux)
          console.log(compraAux)
  
    
        })
        .catch((error) => {
          console.log(error);
        });
    }, [form, cart, cartTotal])
  
  
  

  return (
    <div className ="container  pt-5 mp-5">
      <BuyView mensaje={compra}/>
    </div>
  );
};
