import { useState } from "react";
import "../style/style.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
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

export const CheckOut = () => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const { cart, clearItems, getPriceTotal, getNumCart } = useContext(CartContext);

  const total = getPriceTotal();
  const quantity = getNumCart()



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
    {quantity > 0 ? (
              <>
                  <h1>Check Out</h1>

<form >
  <label>Nombre</label>
  <input
    type="text"
    required
    name="nombre"
    value={name}
    placeholder="Mateo"
    autoComplete="off"
    onChange={evt=>setName(evt.target.value)}
  />

  <label>Apellido</label>
  <input
    type="text"
    required
    name="apellido"
    value={apellido}
    placeholder="Suaste"
    autoComplete="off"
    onChange={evt=>setApellido(evt.target.value)}
  />

  <label>Email</label>
  <input
    type="email"
    required
    name="email"
    value={email}
    placeholder="lector@gmail.com"
    autoComplete="off"
    onChange={evt=>setEmail(evt.target.value)}
  />
</form>

<button type="submit" onClick={() => getOrder()}>Enviar</button>
              </>

            ) : (
               <p>su orden es:</p>
            )
          }
     
    </>
  );
};
