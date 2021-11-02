import { createContext, useReducer, useState} from "react";
import validator from "validator";

const formContext = createContext();

const { Provider } = formContext;

export const FormProvider = ({ children }) => {

  const [validForm, setValidForm] =  useState(false)

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

  const warningMessage = (type) => {
        
    switch (type) {
      case actions.NAME:
        return " Formato de Nombre incorrecto (solo caracteres alfabéticos)"
      case actions.TEL:
        return "Formato de teléfono incorrecto"
      case actions.MAIL:
        return "Formato Email incorrecto"
      default:
        return "";
   
    }
}

  const inputValidation = (e, type, element) => {
    const aviso = document.getElementById(element);
    if (!validateInput(e.target.value, type)) {
      aviso.style.display = "inline";
    } else {
      aviso.style.display = "none";
    }
  };

  const handleChange = (accion, e) => {
    dispatch({ type: accion, payload: { value: e.target.value } });
    inputValidation(e, accion, `aviso${accion}`)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(form)) {
      setValidForm(true)
      console.log("obtenidos correctamente")
    } else {
      alert("Revise los datos ingresados");
      return false
    }

  };

  const valueFormProvider = {
    handleSubmit: handleSubmit,
    handleChange : handleChange,
    warningMessage : warningMessage,
    validateForm : validateForm,
    validForm : validForm,
    form : form

  };

  return <Provider value={valueFormProvider}>{children}</Provider>;
};

export default formContext;
