
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className="nav">
      <div>
        <img src = "/imagenNav/logo.png" alt="LOGO DE CAFE" />
      </div>
      <div className="containerBtn">
        <Link to= '/' className="origenLink" >Inicio</Link>
        <Link to='/category/Cafe de Especialidad'className="origenLink">Cafe de Especialidad</Link>
        <Link to='/category/Maquinas de Espresso'className="origenLink">Maquinas de Espresso</Link>
        <Link to='/category/Accesorios'className="origenLink">Accesorios</Link>
      </div>
      <CartWidget/>
    </nav>
    </>
  );
};

export default Navbar;
