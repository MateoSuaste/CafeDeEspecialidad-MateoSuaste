import "../style/style.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, img, name, origin, stock, description, price }) => {
  const handleOnAdd = (quantity) => {
    console.log("Cantidad de items agregados al carrito", quantity);
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
            <ItemCount stock={stock} inicial={1} onAdd={handleOnAdd} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
