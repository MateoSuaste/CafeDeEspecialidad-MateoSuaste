import { useState, useEffect } from "react";
import { getItemId } from "../../asyncMock";
import CargadeItems from "../CargadeItems/CargadeItems";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getItemId(params.itemId)
      .then((response) => {
        setProduct(response);
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
