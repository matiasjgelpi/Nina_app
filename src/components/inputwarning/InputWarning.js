import { useContext } from "react";
import formContext from "../../context/formContext";

export const InputWarning = ({type}) => {
  const { warningMessage } = useContext(formContext);

  return (
    <>
      <span id={`aviso${type}`} style={{ display: "none", color: "red" }}>
        {warningMessage(type)}
      </span>
    </>
  );
};
