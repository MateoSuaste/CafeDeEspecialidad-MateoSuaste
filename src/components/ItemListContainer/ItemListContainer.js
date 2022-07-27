import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import CargadeItems from "../CargadeItems/CargadeItems";

const ItemListContainer = (props)=>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


        useEffect(()=>{
            getProduct().then(response =>{
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() =>{
                setLoading(false)
            })
        }, [])

        //const listProducts = products.map(product => (
        //    <li key={product.id}>{product.name}</li>
       // ))

       if(loading){
        return <div><CargadeItems/></div>
       }


    return (
        <>
        <h1 className="title">{props.greeting}</h1>
        <ItemList products={products}/>
        </>
    )
} 

export default ItemListContainer;