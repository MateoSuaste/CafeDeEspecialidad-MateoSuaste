import "../style/style.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, img, name, origin, stock, description, price }) => {
 
const[quantity, setQuantity] = useState(0);


 
  const handleOnAdd = (quantity) => {
    console.log("Cantidad de items agregados al carrito", quantity);
    setQuantity(quantity);
  };

  



  return (
    <article className="itemDetail">
      <div className="itemConteiner__Detail">
        <div className="itemDetailDiv1">
          <h1>Detalles del producto {name}</h1>
          <img src={img} alt={name} />
        </div>
        <div className="itemDetailDiv2">
          <h3>Origen: {origin}</h3>
          <h3>Stock: {stock}</h3>
          <h3>Precio: ${price}</h3>
          <p className="descripcion">
            <b>Descripcion</b>: {description}
          </p>
          <div className="itemCountDiv">
           {quantity>0?<Link className="linkCarrito" to="/cart">Terminar Mi Compra</Link>  :<ItemCount stock={stock} inicial={0} onAdd={handleOnAdd} />}
           {quantity>0?<Link className="linkCarrito" to='/'>Seguir Comprando</Link> : <div ></div>}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
