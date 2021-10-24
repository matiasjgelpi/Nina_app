import { useContext } from "react";
import formContext from "../../context/formContext";
import { InputFormUser } from "../inputFormUser/InputFormUser";

export const FormUser = ({ onSubmit }) => {
  const { handleSubmit } = useContext(formContext);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <InputFormUser type="Nombre" />

      <InputFormUser type="Telefono" />

      <InputFormUser type="Email" />

      <button className="btn btn-primary">Finalizar compra</button>
    </form>
  );
};
