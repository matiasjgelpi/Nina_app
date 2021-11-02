import { useContext } from "react";
import formContext from "../../context/formContext";
import { InputWarning } from "../inputwarning/InputWarning";

export const InputFormUser = ({ type }) => {
  const { handleChange} = useContext(formContext);

  return (
    <div>
      <input
        onChange={(e) => handleChange(type, e)}
        className="form-control "
        required
        type="text"
        id={`${type}`}
        placeholder={`${type}`}
      />

      <InputWarning type={type} />
    </div>
  );
};
