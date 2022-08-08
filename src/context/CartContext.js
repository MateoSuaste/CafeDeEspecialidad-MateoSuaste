import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = (children) =>{

    const [cart, setCart] = useState([])

const addItem = (productToAdd) =>{
    setCart([...cart, productToAdd])
}
    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
    )
}



