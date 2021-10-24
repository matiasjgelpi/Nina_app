import { createContext, useReducer, useContext } from "react";
import cartContext from "../context/cartContext";
import { getOrden } from "../components/utils/getOrden";
import validator from "validator";

const formContext = createContext();

const { Provider } = formContext;

export const FormProvider = ({ children }) => {
  const actions = {
    NAME: "Nombre",
    TEL: "Telefono",
    MAIL: "Email",
  };

  const reducer = (form, action) => {
    switch (action.type) {
      case actions.NAME:
        return { ...form, name: action.payload.value };
      case actions.TEL:
        return { ...form, tel: action.payload.value };
      case actions.MAIL:
        return { ...form, email: action.payload.value };
      default:
        return form;
    }
  };

  const { cart, cartTotal } = useContext(cartContext);
  const [form, dispatch] = useReducer(reducer, {});

  const validateInput = (value, type) => {
    switch (type) {
      case actions.NAME:
        return validator.isAlpha(value);
      case actions.TEL:
        return validator.isMobilePhone(value);
      case actions.MAIL:
        return validator.isEmail(value);
      default:
        return true;
    }
  };

  const validateForm = (form) => {
    if (
      validateInput(form.name, "Nombre") &&
      validateInput(form.tel, "Telefono") &&
      validateInput(form.email, "Email")
    )
      return true;
    else return false;
  };

  const handleBlur = (e, type, element) => {
    const aviso = document.getElementById(element);
    if (!validateInput(e.target.value, type)) {
      aviso.style.display = "inline";
    } else {
      aviso.style.display = "none";
    }
  };

  const handleChange = (accion, e) => {
    dispatch({ type: accion, payload: { value: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      getOrden(form, cart, cartTotal());
    } else {
      alert("Revise los datos ingresaros");
    }
  };

  const valueFormProvider = {
    handleSubmit: handleSubmit,
    handleChange : handleChange,
    handleBlur: handleBlur,
  };

  return <Provider value={valueFormProvider}>{children}</Provider>;
};

export default formContext;
