import Item from "../Item/Item";
import "../style/style.css"
import Fondo from "../ImgFondo/ImgFondo";


const ItemList = ({products}) => {
    return(
      
        
        <section className="itemList">
            {products.map(product =>(
                <Item {...product} key={product.id}/>
            ))}
        </section>
    
    )
}

export default ItemList;