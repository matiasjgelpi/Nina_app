import {useState} from 'react'
import "./style.css"

const ItemCount = ({stock, initial,  onAdd}) => {

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
            <div className="btn-group row justify-content-center" role="group">
                <button className="btn btn-danger col-md-3" onClick={()=>{setInputValue("restar")}}>-</button>
                <input  className= "col-md-6 text-center" id="input-contador" type="number" min={initial}  max={stock}/>
                <button className="btn btn-danger col-md-3" onClick={()=>{setInputValue("sumar")}}>+</button>
                <button className="btn btn-outline-danger" onClick={(e) => {e.preventDefault(); onAdd(contador)}}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
