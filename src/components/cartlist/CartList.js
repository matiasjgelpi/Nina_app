import { useContext } from "react";
import cartContext from "../../context/cartContext";

export const CartList = () => {


  const { cart, removeItem} = useContext(cartContext);


  return (
    <>
      {cart.map((art) => (
        <tr className="text-center" key={art.id}>
          <th scope="row">{art.id}</th>
          <td className="col-3">{art.name} </td>
          <td className="col-3">{art.cantidad}</td>
          <td className="col-3">{art.price} </td>
          <td className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                removeItem(art.id);
              }}
            >
              X
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
