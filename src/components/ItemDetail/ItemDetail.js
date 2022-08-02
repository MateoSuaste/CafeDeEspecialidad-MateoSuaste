import "../style/style.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const handleOnAdd = (quantity) => {
    console.log("Cantidad de items agregados al carrito", quantity);
  };

  return (
    <article className="itemDetail">
      <div className="itemConteiner__Detail">
        <div className="itemDetailDiv1">
          <h1>Detalles del producto {product.name}</h1>
          <img src={product.img} alt="{product.name}" />
        </div>
        <div className="itemDetailDiv2">
          <h3>Origen: {product.origin}</h3>
          <h3>Stock: {product.stock}</h3>
          <p className="descripcion">
            <b>Descripcion</b>: {product.description}
          </p>
          <div className="itemCountDiv">
            <ItemCount stock={product.stock} inicial={1} onAdd={handleOnAdd} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
