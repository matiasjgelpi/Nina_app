import CartWidget from "../cartwidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

const NavBar = () => {
  const { cart } = useContext(cartContext);

  return (
    <nav id="Navbar" className="navbar navbar-expand-lg navbar-dark fixed-top text-uppercase font-weight-bolder">
      <div
        className="collapse navbar-collapse d-flex justify-content-center align-content-center"
        id="navbarSupportedContent"
      >
        <NavLink className="navbar-brand " to="/">
          Tienda Nina
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/:category1">
              Categoria 1
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/category/:category2">
              Categoria 2
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="https://www.binance.com/es"
              style={{ color: "#d01c5e" }}
              className="nav-link"
            >
              ¡Aceptamos Cripto!
            </a>
          </li>
          <li
            className="nav-item"
            style={
              cart.length === 0
                ? { display: "none" }
                : { display: "inline-block" }
            }
          >
            <NavLink className="nav-link" to="/cart">
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
