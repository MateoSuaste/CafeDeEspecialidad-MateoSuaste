import { CartContext } from "../../context/CartContext";
import { useContext} from "react";
import "../style/style.css";
import CartItem from "../CartItem/CartItem";



const Cart = () =>{
    const {cart, clearItems, getPriceTotal} = useContext(CartContext)

    const total = getPriceTotal();


    return(
        <div className="cartContainer">
            <h1>Su Carrito</h1>
            {cart.map(item => <CartItem key={item.id} {...item}/>)}
            <h2>Total: ${total}</h2>
            <button className="buttonTerminar">Terminar con la Compra</button>
            <button className="buttonVaciar" onClick={() =>clearItems()}>Vaciar Carrito</button>
        </div>
    )
}


export default Cart;