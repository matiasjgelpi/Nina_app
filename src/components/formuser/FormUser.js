import { useState } from "react";

export const FormUser = ({onSubmit}) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handleInput = (setFunction, e) => {
    const valorInput = e.target.value;
    setFunction(valorInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nombre, telefono, email)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={(e) => handleInput(setNombre, e)}
          required
          type="text"
          placeholder="Nombre"
        />
      </div>
      <div>
        <input
          onChange={(e) => handleInput(setTelefono, e)}
          required
          type="text"
          placeholder="Telefono"
        />
      </div>
      <div>
        <input
          onChange={(e) => handleInput(setEmail, e)}
          required
          type="text"
          placeholder="Email"
        />
      </div>

      <button className="btn btn-primary">Finalizar compra</button>
    </form>
  );
};
