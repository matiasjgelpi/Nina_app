import { useContext } from "react";
import formContext from "../../context/formContext";
import { InputWarning } from "../inputwarning/InputWarning";

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

      <InputWarning type={type} />
    </div>
  );
};
