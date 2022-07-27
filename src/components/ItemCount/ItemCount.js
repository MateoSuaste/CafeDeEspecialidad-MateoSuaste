import { useState } from "react";

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
    <div>
      <button onClick={restar}>-</button>
      <p>{count}</p>
      <button onClick={sumar}>+</button>
      <button onClick={handleOnAdd}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;