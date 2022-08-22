import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "../style/style.css";
import CartProd from "../CartProd/CartProd";
import { FormCart } from "../FormCart/FormCart";
import {
  addDoc,
  collection,
  getDocs,
  where,
  query,
  documentId,
  doc,
  writeBatch,
} from "firebase/firestore";
import { ref } from "../../services/firebase/index";

const Cart = () => {
  const { cart, clearItems, getPriceTotal } = useContext(CartContext);

  const total = getPriceTotal();

  const getOrder = async () => {
    try {
      const setOrder = {
        buyer: {
          name:"nnn",
          apellido:"nnn",
          email:"dd",
        },
        items: cart,
        total,
      };

      const arrayId = cart.map((prod) => prod.id);
      const getProductsFirestore = await getDocs(
        query(collection(ref, "products"), where(documentId(), "in", arrayId))
      );
      const dataByDocs = getProductsFirestore;
      const bach = writeBatch(ref);
      const stockNull = [];

      dataByDocs.forEach((element) => {
        const dataDocs = element.data();
        const stockBase = dataDocs.stock;
        const prodAdd = cart.find((prod) => prod.id === element.id);
        const prodQuantity = prodAdd?.quantity;

        if (stockBase > prodQuantity) {
          bach.update(element.ref, { stock: stockBase - prodQuantity });
        } else {
          stockNull.push({ id: element.id, ...dataDocs });
        }
      });

      if (stockNull.length === 0) {
        const order = collection(ref, "orders");
        const orderPush = await addDoc(order, setOrder);
        bach.commit();
        console.log(orderPush.id)
        clearItems()
      } else {
        clearItems();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="cartContainer">
      <h1>Su Carrito</h1>
      {cart.map((item) => (
        <CartProd key={item.id} {...item} />
      ))}
      <h2>Total: ${total}</h2>
      <button className="buttonTerminar" onClick={() => getOrder()}>
        Terminar con la Compra
      </button>
      <button className="buttonVaciar" onClick={() => clearItems()}>
        Vaciar Carrito
      </button>
    </div>
    <FormCart/>
    </>
  );
  
};

export default Cart;
