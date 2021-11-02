import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { CartList } from "../cartlist/CartList";

export default function CartView() {
  const { cart, cartTotal} = useContext(cartContext);

  return (
    <>
      {cart.length === 0 ? (
        <span className="text-center">No hay elementos en el carrito</span>
      ) : (
        <div className="row justify-content-center mb-2">
          <table className="table table-borderless table-responsive">
            <thead className="thead-light text-center">
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <CartList />
            </tbody>
            <tfoot id="totales">
              <tr>
               <th></th>
                <th></th>
                <th></th>
                <td className="text-end font-weight-bold"><h5>Total : $ {cartTotal()}</h5></td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </>
  );
}
