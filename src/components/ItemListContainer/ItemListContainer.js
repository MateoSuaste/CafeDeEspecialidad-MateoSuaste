import { useState, useEffect } from "react";
import { getProduct, getItemByOrigin } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import CargadeItems from "../CargadeItems/CargadeItems";
import { useParams } from "react-router-dom";

const ItemListContainer = (props)=>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams() 

        useEffect(()=>{
            if(params.origenId){
                getItemByOrigin(params.origenId).then(response =>{
                    setProducts(response)
                }).catch(error => {
                    console.log(error)
                }).finally(() =>{
                    setLoading(false)
                })
            }else{
                getProduct(params.origenId).then(response =>{
                    setProducts(response)
                }).catch(error => {
                    console.log(error)
                }).finally(() =>{
                    setLoading(false)
                })
            }
        }, [params.origenId])

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