import { useContext } from "react";
import formContext from "../../context/formContext";

export const InputFormUser = ({ type }) => {
  const { handleChange, handleBlur } = useContext(formContext);

  return (
    <div>
      <input
        onChange={(e) => handleChange(type, e)}
        onBlur={(e) => handleBlur(e, type, `aviso${type}`)}
        required
        type="text"
        placeholder={`${type}`}
      />
      <span id={`aviso${type}`} style={{ display: "none", color: "red" }}>
        Formato incorrecto, intente nuevamente
      </span>
    </div>
  );
};
