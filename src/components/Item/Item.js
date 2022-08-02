import "../style/style.css";
import {Link} from "react-router-dom"

const Item = ({ img, name, price, id }) => {
  return (
    <article className="items" key={id}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`} className="linkItem">Ver detalles</Link>
    </article>
  );
};

export default Item;
