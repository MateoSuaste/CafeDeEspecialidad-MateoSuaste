import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "../style/style.css";
import CartProd from "../CartProd/CartProd";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, clearItems, getPriceTotal } = useContext(CartContext);

  const total = getPriceTotal();

 

  return (
    
    <div className="cartContainer">
      <h1>Su Carrito</h1>
      {cart.map((item) => (
        <CartProd key={item.id} {...item} />
      ))}
      <h2>Total: ${total}</h2>
      <Link to="/checkOut" className="buttonTerminar">
        Terminar con la Compra
      </Link>
      <button className="buttonVaciar" onClick={() => clearItems()}>
        Vaciar Carrito
      </button>
    </div>
   
  );
  
};

export default Cart;
