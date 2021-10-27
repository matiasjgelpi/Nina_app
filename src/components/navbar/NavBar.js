import CartWidget from "../cartwidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
// import "./NavBar.css"

const NavBar = () => {
  const { cart } = useContext(cartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary text-uppercase font-weight-bolder">
  
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
           <NavLink className="nav-link" to="/">
              Catalogo
            </NavLink>
          </li>
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
          <li
            className="nav-item"
            style={cart.length === 0 ? { display: "none" } : { display: "inline-block" }}
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
