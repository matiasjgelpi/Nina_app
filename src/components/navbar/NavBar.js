import "bootstrap/dist/css/bootstrap.min.css"
import CartWidget from "../cartwidget/CartWidget";


const NavBar = () => {
return (<nav className="navbar navbar-expand-lg navbar-light bg-ligh">
            <img className="navbar-brand" src="" alt="Logo-nina"/>
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="../../public/index.html">Quines soy</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../../public/index.html">Fotos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../../public/index.html">Carrito</a>
             </li>
            <li className="nav-item">
                <a className="nav-link" href="../../public/index.html">Contacto</a>
            </li>
            <li>
                <CartWidget/>
            </li>
         </ul>

        </nav>);
}

export default NavBar;