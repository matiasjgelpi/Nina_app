import CartWidget from "../cartwidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../../context/cartContext";




const NavBar = () => {

  const { cart } = useContext(cartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <NavLink to="/">
        <h1>Nina APP</h1>
      </NavLink>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/:jewelery">
            Joyeria
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/category/:electronics">
            Electronica
          </NavLink>
        </li>
        <li className="nav-item" style={cart.length === 0 ? {display:"none"}  : {display:"block"}}>
          <NavLink className="nav-link"  to="/cart">
            <CartWidget/>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="../../public/index.html">
            Contacto
          </NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
