import {useContext} from "react";
import formContext from "../../context/formContext";



export const FormUser = ({ onSubmit }) => {


  const {handleSubmit, handleInput} = useContext(formContext)


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          onChange={(e) => handleInput("nombre", e)}
          required
          type="text"
          placeholder="Nombre"
        />
      </div>
      <div>
        <input
          onChange={(e) => handleInput("tel", e)}
          required
          type="text"
          placeholder="Telefono"
        />
      </div>
      <div>
        <input
          onChange={(e) => handleInput("email", e)}
          required
          type="text"
          placeholder="Email"
        />
      </div>

      <button className="btn btn-primary">Finalizar compra</button>
    </form>
  );
};
