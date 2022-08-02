const products = [
    {
        id:'1',
        name:"Colombia Tolima 250g. Tueste Medio.",
        price:2500,
        origin:'Colombia',
        img:'imgProducts/ColombiaTolimaTM.png',
        stock:20,
        description:'Un café dulce y muy fácil de tomar, con notas a chocolate y naranja, perfectamente balanceado. Ideal para espresso y moka italiana: nuestro café recomendado para preparar bebidas con leche.',
    },
    {
        id:'2',
        name:"Guatemala Hueuetenango 250G. Tueste medio-claro.",
        price:3200,
        origin:'Guatemala',
        img:'imgProducts/GuatemalaHuehuetenangoTMC.png',
        stock:15,
        description:'Un café muy dulce y balanceado. Como morder una manzana roja en su punto justo. Presenta un buen cuerpo pronunciado y cremos. Las notas de cata son chocolate con leche, avellana, almendra, manzana roja y uva blanca. Con una acidez muy sutil.Ideal para espresso y métodos con presión como la moka italiana, aunque también se desenvuelve muy bien en métodos filtrados. Debido a su cuerpo cremoso y notas dulces es un café que combina muy bien con todo tipo de leche.',
    },

    {
        id:'3',
        name:"Etiopia Guji 250G. Tueste claro.",
        price:3900,
        origin:'Etiopia',
        img:'imgProducts/EtiopiaGujiTC.png',
        stock:10,
        description:'Un café único para paladares exquisitos, simplemente delicioso. Desde donde nació el café, Etiopia, y más precisamente de Guji, llegan estos granos increíbles. Con todo el sabor de África: buen cuerpo, súper jugoso y dulce, característico de este origen y potenciados por su beneficio natural. Sus notas de cata son mermelada de frutos rojos, uva, mora, arándano y un final floral a hibiscus. Con un tueste claro, es un café muy versátil. Lo recomendamos para todo tipo de métodos, desde filtrados hasta espresso.' 
        
        
    }
]

 export const getProduct = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve(products)
        },3000)
    })
}

export const getItemId = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve(products.find(prod => prod.id === id))
        },1000)
    })
}

export const getItemByOrigin = (origenId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve(products.filter(prod => prod.origin === origenId))
        },1000)
    })
}