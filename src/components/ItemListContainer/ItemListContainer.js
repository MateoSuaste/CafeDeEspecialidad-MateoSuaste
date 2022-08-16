import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import CargadeItems from "../CargadeItems/CargadeItems";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { ref } from "../../services/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const collectionById = !params.origenId
      ? collection(ref, "products")
      : query(
          collection(ref, "products"),
          where("origin", "==", params.origenId)
        );

        

    getDocs(collectionById)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [params.origenId]);

  if (loading) {
    return (
      <div>
        <CargadeItems />
      </div>
    );
  }

  return (
    <>
      <h1 className="title">{props.greeting}</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
