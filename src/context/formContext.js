import { createContext, useReducer, useContext} from "react";
import cartContext from "../context/cartContext";
import { getOrden } from "../components/utils/getOrden";
import validator from "validator";

const formContext = createContext();

const { Provider } = formContext;

export const FormProvider = ({ children }) => {

  
 
  const reducer = (form, action) => {
    switch (action.type) {
      case "nombre":
        return { ...form, name: action.payload.value };
      case "tel":
        return { ...form, tel: action.payload.value };
      case "email":
        return { ...form, email: action.payload.value };
      default:
        return form;
    }
  };

  const { cart, cartTotal } = useContext(cartContext)
  const [form, dispatch] = useReducer(reducer, {});

  const handleInput = (accion, e) => {
    const valorInput = e.target.value;
    console.log(validator.isEmail(valorInput));
    dispatch({ type: accion, payload: { value: valorInput } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getOrden(form, cart, cartTotal())
  };

  const valueFormProvider = {
    handleSubmit: handleSubmit,
    handleInput: handleInput,
  };

  return <Provider value={valueFormProvider}>{children}</Provider>;
};

export default formContext;
