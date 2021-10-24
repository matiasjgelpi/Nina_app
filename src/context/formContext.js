import { createContext, useReducer } from "react";
import validator from "validator";

const formContext = createContext();

const { Provider } = formContext;

export const FormProvider = ({ children }) => {
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

  const [form, dispatch] = useReducer(reducer, {});

  const handleInput = (accion, e) => {
    const valorInput = e.target.value;
    console.log(validator.isEmail(valorInput));
    dispatch({ type: accion, payload: { value: valorInput } });
  };

  const handleSubmit = (e, onSubmitFunction) => {
    e.preventDefault();
    onSubmitFunction(form);
  };

  const valueFormProvider = {
    handleSubmit: handleSubmit,
    handleInput: handleInput,
  };

  return <Provider value={valueFormProvider}>{children}</Provider>;
};

export default formContext;
