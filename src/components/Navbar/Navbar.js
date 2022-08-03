
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
        <Link to='/origen/Colombia'className="origenLink">De Colombia</Link>
        <Link to='/origen/Guatemala'className="origenLink">De Guatemala</Link>
        <Link to='/origen/Etiopia'className="origenLink">De Etiopia</Link>
       
      </div>
      <CartWidget/>
    </nav>
    </>
  );
};

export default Navbar;
