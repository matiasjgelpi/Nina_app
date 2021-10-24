import { useContext } from "react";
import formContext from "../../context/formContext";


export const FormUser = ({ onSubmit }) => {
  const { handleSubmit, handleClick, handleBlur } = useContext(formContext);



  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          onChange={(e) => handleClick("nombre", e)}
          onBlur={(e) => handleBlur(e, "nombre", "avisoNombre")}
          required
          type="text"
          placeholder="Nombre"
        />
        <span id="avisoNombre" style={{ display: "none", color: "red" }}>
          Ingrese un nombre válido por favor(sin números)
        </span>
      </div>
      <div>
        <input
          onChange={(e) => handleClick("tel", e)}
          onBlur={(e) => handleBlur(e, "tel", "avisoTelefono")}
          required
          type="text"
          placeholder="Telefono"
        />
        <span id="avisoTelefono" style={{ display: "none", color: "red" }}>
          Ingrese un Télefono válido por favor(solo números)
        </span>
      </div>
      <div>
        <input
          onChange={(e) => handleClick("email", e)}
          onBlur={(e) => handleBlur(e, "email", "avisoEmail")}
          required
          type="text"
          placeholder="Email"
        />
         <span id="avisoEmail" style={{ display: "none", color: "red" }}>
          Ingrese un mail válido por favor
        </span>
      </div>

      <button className="btn btn-primary">Finalizar compra</button>
    </form>
  );
};
