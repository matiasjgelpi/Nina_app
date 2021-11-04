import {useState} from 'react'
import "./itemCountStyle.css"

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);


    const setInputValue = (operacion) => {
        const input = document.getElementById("input-contador")
       if(operacion ==="sumar"){
        input.stepUp()
        setContador(input.value)}
        else{
        input.stepDown()
        setContador(input.value)}

    }

    

    return (
        <div className="container">
            <div className="btn-group-sm row d-flex justify-content-center" role="group">
                <button className="btn btn-danger col-1 p-1" onClick={()=>{setInputValue("restar")}}>-</button>
                <input  className= "text-center col-1" id="input-contador" type="number" min={initial}  max={stock} defaultValue={initial}/>
                <button className="btn btn-danger col-1 p-1 " onClick={()=>{setInputValue("sumar")}}>+</button>
                
            </div>
            <div className="row d-flex justify-content-center">
                 <button className="btn btn-danger mt-1 col-4"  onClick={() => {onAdd(contador)}}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
