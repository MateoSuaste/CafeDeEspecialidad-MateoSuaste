import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    const {getNumCart} = useContext(CartContext)
    const quantity = getNumCart()

    if(quantity ===0){
        return 
    }else{
        return (
            <Link to='/cart' className="containerCart">
                 <img src = "/imagenNav/cart.svg" alt="CartWidget" className="cart" />
                 <p>{quantity}</p>
                
            </Link>
        );
    }
   
        
    
}


export default CartWidget;