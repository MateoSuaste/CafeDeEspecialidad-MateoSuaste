import { useState, useEffect } from "react";
import { getItem } from "../../asyncMock";
import CargadeItems from "../CargadeItems/CargadeItems";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = (product) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getItem().then(response =>{
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
    }, [])


    if(loading){
        return <div><CargadeItems/></div>
       }

       return (
        <section>
        {products.map(product =>(
                <ItemDetail product={product} key={product.id}/>
            ))}
        </section>
       )
}

export default ItemDetailContainer;