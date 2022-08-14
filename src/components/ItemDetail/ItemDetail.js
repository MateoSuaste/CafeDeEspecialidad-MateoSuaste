import "../style/style.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, img, name, origin, stock, description, price }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem, getItemQuantity } = useContext(CartContext);

  const quantityPush = getItemQuantity(id);

  const handleOnAdd = (quantity) => {
    console.log("Cantidad de items agregados al carrito", quantity);
    setQuantity(quantity);
    addItem({ id, name, price, origin, quantity });
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
            {quantity > 0 ? (
              <>
                <Link className="linkCarrito" to='/cart'>
                  Terminar Mi Compra
                </Link>
                <Link className='linkCarrito' to='/'>
                  Seguir Comprando
                </Link>
              </>

            ) : (
              <ItemCount stock={stock} initial={quantityPush} onAdd={handleOnAdd} />
            )
          }
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
