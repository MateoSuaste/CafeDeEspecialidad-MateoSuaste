import Item from "../Item/Item";
import "../ItemList/ItemList.css"


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