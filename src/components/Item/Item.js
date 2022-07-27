import "../style/style.css";

const Item = ({ product }) => {
  return (
    <article key={product.id} className="items">
      <img src={product.img} alt="{product.name}" />
      <h3>{product.name}</h3>
      <p>Precio: {product.price}</p>
      <button>Ver detalles</button>
    </article>
  );
};

export default Item;
