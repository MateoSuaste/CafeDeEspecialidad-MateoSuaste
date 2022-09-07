import { useState } from "react";
import "../CheckOut/CheckOut.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  addDoc,
  collection,
  getDocs,
  where,
  query,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { ref } from "../../services/firebase/index";
import { Link } from "react-router-dom";

export const CheckOut = () => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const {cart, clearItems, getPriceTotal, getNumCart } =
    useContext(CartContext);
  const total = getPriceTotal();
  const quantity = getNumCart();
  const [numOrder, setNumOrder] = useState("");
  const [stocks, setStocks] = useState("")

  const validation = (name, apellido, email) => {
    const validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (name.length < 4) return "El nombre tiene que tener minimo 5 caracteres";
    if (apellido.length < 4)
      return "El apellido tiene que tener minimo 5 caracteres";
    if (!validarEmail.test(email)) return "El email es invalido";
  };

  const messageError = validation(name, apellido, email);
  const stockNull = [];

  const getOrder = async () => {
    try {
      const setOrder = {
        buyer: {
          nombre: name,
          apellido: apellido,
          email: email,
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
     

      dataByDocs.forEach((element) => {
        const dataDocs = element.data();
       const stockBase = dataDocs.stock;
       setStocks(stockBase)
        const prodAdd = cart.find((prod) => prod.id === element.id);
        const prodQuantity = prodAdd?.quantity;

        if (stockBase >= prodQuantity) {
          bach.update(element.ref, { stock: stockBase - prodQuantity });
        } else {
          stockNull.push({ id: element.id, ...dataDocs });
        }
      });
      

      if (stockNull.length===  0) {
        const order = collection(ref, "orders");
        const orderPush = await addDoc(order, setOrder);
        bach.commit();
        setNumOrder(orderPush.id);
        clearItems();
      } else {
        clearItems();
      }
    } catch (error) {
      console.log(error);
    }
  };

  


  return (
    <>
      {quantity > 0 ? (
        <>
          <h1 className="titleCheckOut">Check Out</h1>
          <div className="containerForm">
            <form>
              <label>Nombre</label>
              <input
                type="text"
                required
                name="nombre"
                value={name}
                placeholder="Mateo"
                autoComplete="off"
                onChange={(evt) => setName(evt.target.value)}
              />

              <label>Apellido</label>
              <input
                type="text"
                required
                name="apellido"
                value={apellido}
                placeholder="Suaste"
                autoComplete="off"
                onChange={(evt) => setApellido(evt.target.value)}
              />

              <label>Email</label>
              <input
                type="email"
                required
                name="email"
                value={email}
                placeholder="lector@gmail.com"
                autoComplete="off"
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </form>
            <p>{messageError}</p>
            <button
              disabled={messageError}
              type="submit"
              onClick={() => getOrder()}
            >
              Enviar
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="titleCheckOut">Check Out</h1>
          {stocks===0?(
            <> <div className="containerOrder">
            <p className="order">
              Productos Fuera de stock. Por favor disculpe las molestias
            </p>
          </div>

          <Link className="linkCheckOut" to="/">
            Seguir Comprando
          </Link></>
          ):(
            <> <div className="containerOrder">
            <p className="order">
              Su orden de compra fue generada con exito, su codigo de seguimiento es: {numOrder}
            </p>
          </div>

          <Link className="linkCheckOut" to="/">
            Seguir Comprando
          </Link></>
          )}
         
        </>
      )}
    </>
  );
};
