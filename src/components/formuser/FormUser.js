import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";
import formContext from "../../context/formContext";
// import { BuyViewContainer } from "../buyviewcontainer/BuyViewContainer";
import { InputFormUser } from "../inputformuser/InputFormUser";


export const FormUser = () => {

  const {handleSubmit, validForm} = useContext(formContext);
  const {cart} = useContext(cartContext)
  console.log(validForm)


  return (
    <div className="row no-wrap d-flex justify-content-center pt-5">
      {cart.length === 0 ? (
        ""
      ) : (
        <div className="row d-flex justify-content-center ">        <form
          id="formulario"
          className="form-group col-6 text-center"
          onSubmit={(e) => handleSubmit(e)}
          
        >
          <p><b>Ingrese sus datos para finalizar su compra</b></p>

          <InputFormUser type="Nombre" />

          <InputFormUser type="Telefono" />

          <InputFormUser type="Email" />
        <div className="row d-flex justify-content-center  ">
          <button className="btn btn-primary mt-2 col-3 " style={validForm ? {display:"none"} : {display:"block"}}>Obtener Formulario</button>
          <Link to="/buy" className= "btn btn-primary col-3 mt-2 mb-2" style={validForm ? {display:"block"} : {display:"none"}}>Finalizar Compra</Link>
        </div>
        </form>
        </div>
      )}
        
        {/* <BuyViewContainer style={validForm ? {display:"block"} : {display:"none"}}/> */}

    </div>
  );
};
