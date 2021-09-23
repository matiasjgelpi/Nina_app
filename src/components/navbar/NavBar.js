
import CartWidget from "../cartwidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <img className="navbar-brand" src="" alt="Logo-nina" />
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="../../public/index.html">
            Quines soy
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../../public/index.html">
            Fotos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../../public/index.html">
            Carrito
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="../../public/index.html">
            Contacto
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
