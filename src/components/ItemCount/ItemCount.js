import { useState} from "react";

const ItemCount = ({inicial, stock, onAdd}) =>{
    const [count, setCount] = useState(0)

    const restar = () =>{
        if(count>inicial){
            setCount(count - 1)
        }
        
    }

    const sumar = () =>{
        if(count<stock){
            setCount(count + 1)
        }
    }

    

    return(
        <div>
            <button onClick={restar}>-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
            <button onClick={()=>onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
