import { useState } from "react";
import "../style/style.css";

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
  const [count, setcount] = useState(initial)

  const sumar = () => {
      if(count < stock) {
          setcount(count+1)
      }
  }

  const restar = () => {
      if(count > 1) {
          setcount(count - 1)
      }     
  }
  

  return (
    <div className="itemCountContainer">
      <button onClick={restar} className="buttonMenos">-</button>
      <p className="numberCount">{count}</p>
      <button onClick={sumar} className="buttonMas">+</button>
      <button onClick={() => onAdd(count)} className="buttonAgregar">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
