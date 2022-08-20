import "../style/style.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FormCart } from "../FormCart/FormCart";


const ItemDetail = ({ id, img, name, origin, stock, description, price}) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem, getItemQuantity } = useContext(CartContext);
  const quantityPush = getItemQuantity(id);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const handleOnAdd = (quantity) => {
    console.log("Cantidad de items agregados al carrito", quantity);
    setQuantity(quantity);
    addItem({ id, name, price, origin, quantity });
  };

  return (
    <>
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
                 <button onClick={handleShow} className="linkCarrito" variant="primary">Terminar con la compra</button>
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
    <FormCart show={show} handleClose={handleClose}/>
    </>
  );
};

export default ItemDetail;
