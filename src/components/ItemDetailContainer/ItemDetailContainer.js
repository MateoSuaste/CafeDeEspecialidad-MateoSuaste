import { useState, useEffect } from "react";
import { getItem } from "../../asyncMock";
import CargadeItems from "../CargadeItems/CargadeItems";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem()
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <CargadeItems />
      </div>
    );
  }

  return (
    <section>
      <ItemDetail product={product} key={product.id} />
    </section>
  );
};

export default ItemDetailContainer;
