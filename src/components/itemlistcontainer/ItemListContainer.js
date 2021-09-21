import {useEffect, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import ItemCount from "../itemcount/ItemCount"
import ItemList from "../itemlist/ItemList"


let productosIniciales = [{id:"1", nombre:"producto1", precio:50, img:"acá va la imagen"},{id:"2", nombre:"producto2", precio:50, img:"acá va la imagen"},{id:"3", nombre:"producto3", precio:50, img:"acá va la imagen"}]

const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState("")

    useEffect(() => {

     const simulacionPedido = new Promise((resolver) => {
        setTimeout(() => {
            resolver(productosIniciales)
            },2000)
        
     }) 
     
        simulacionPedido.then(resultado =>{
            setProductos(productosIniciales)
     })
       

    },[])


    return (
        
        <>            
            <ItemList array={productos} />
        </>
        
    )
}

export default ItemListContainer 

