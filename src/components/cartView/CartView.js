import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { CartList } from "../cartlist/CartList";

export default function CartView() {
  const {cartTotal } = useContext(cartContext);

  return (
    <>
      <div className="row justify-content-center">
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
              <td>Total : {cartTotal()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
