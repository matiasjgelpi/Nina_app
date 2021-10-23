import { useState, useReducer } from "react";

const reducer = (form, action) => {
  switch (action.type) {
    case "nombre":
      // console.log(form);
      return { ...form, name: action.payload.value };
    case "tel":
      // console.log(form);
      return { ...form, tel: action.payload.value };
    case "email":
      // console.log(form);
      return { ...form, email: action.payload.value };
    default:
      return form;
  }
};

export const FormUser = ({ onSubmit }) => {
  // const [nombre, setNombre] = useState("");
  // const [telefono, setTelefono] = useState("");
  // const [email, setEmail] = useState("");

  const [form, dispatch] = useReducer(reducer, {});
  // const [user, setUser] = useState({});

  const handleInput = (accion, e) => {
    const valorInput = e.target.value;
    // console.log(valorInput)
    // console.log(form)
    dispatch({ type: accion, payload: { value: valorInput } });
    // setFunction(valorInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // onSubmit(nombre, telefono, email)
  };

  return (
    <form onSubmit={handleSubmit}>
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
