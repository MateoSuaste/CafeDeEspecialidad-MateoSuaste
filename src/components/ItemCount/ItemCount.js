import { useState } from "react";
import "../style/style.css";

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const restar = () => {
    if (count > inicial) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleOnAdd = () => {
    if (count <= stock) {
      onAdd(count);
    } else {
      console.log("Stock agotado");
    }
  };

  return (
    <div className="itemCountContainer">
      <button onClick={restar} className="buttonMenos">-</button>
      <p>{count}</p>
      <button onClick={sumar} className="buttonMas">+</button>
      <button onClick={handleOnAdd} className="buttonAgregar">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;