import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "../style/style.css";

const CartProd = ({id, name, price, quantity}) =>{
    const {removeItem} = useContext(CartContext)
    
    return(
        <div className="cartItem"> 
            <h2> {name}</h2>
            <p>Cantidad: {quantity}</p>
            <p>SubTotal: {quantity * price}</p>
            <button onClick={() => removeItem(id)}>Borrar Producto</button>
        </div>
    )
}

export default CartProd;