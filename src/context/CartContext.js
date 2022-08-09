import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getNumCart = () =>{
    let acumulador = 0;
    cart.forEach(prod =>{
        acumulador += prod.quantity
    })

    return acumulador
  }

  const removeItem = (id) =>{
    const cartOutProd = cart.filter(prod => prod.id !== id)
    setCart(cartOutProd)
  }

  const clearItems = () =>{
    setCart([])
  }

  const getItemQuantity = (id) => {
    const item = cart.find(prod => prod.id === id)

    return item?.quantity
  }

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)){
        setCart([...cart, productToAdd]);
    }else{
        const cartUpdated = cart.map(prod =>{
            if(prod.id === productToAdd.id){
                const newItem = {
                    ...prod,
                    quantity:productToAdd.quantity
                }
                return newItem
            } else {
                return prod
            }
        })
        setCart(cartUpdated)
    }
  };
  console.log(cart)

  const isInCart = (id) =>{
    return cart.some (prod =>prod.id ===id)
  }
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearItems, getNumCart, getItemQuantity, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
