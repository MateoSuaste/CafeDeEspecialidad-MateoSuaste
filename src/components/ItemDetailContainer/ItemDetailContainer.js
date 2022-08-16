import { useState, useEffect } from "react";
import CargadeItems from "../CargadeItems/CargadeItems";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { ref } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getDoc(doc(ref, "products", params.itemId))
      .then((res) => {
        const product = { id: res.id, ...res.data() };
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.itemId]);

  if (loading) {
    return (
      <div>
        <CargadeItems />
      </div>
    );
  }

  return (
    <section>
      <ItemDetail {...product} key={product.id} />
    </section>
  );
};

export default ItemDetailContainer;
