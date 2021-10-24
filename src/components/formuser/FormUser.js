import { useReducer, useContext} from "react";
import validator from "validator";
import formContext from "../../context/formContext";


// const reducer = (form, action) => {
//   switch (action.type) {
//     case "nombre":
//       console.log(form);
//       return { ...form, name: action.payload.value };
//     case "tel":
//       console.log(form);
//       return { ...form, tel: action.payload.value };
//     case "email":
//       console.log(form);
//       return { ...form, email: action.payload.value };
//     default:
//       return form;
//   }
// };

export const FormUser = ({ onSubmit }) => {

  // const [form, dispatch] = useReducer(reducer, {});

  // const handleInput = (accion, e) => {
  //   const valorInput = e.target.value;
  //   console.log(validator.isEmail(valorInput))
  //   dispatch({ type: accion, payload: { value: valorInput } });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(form)
  // };

  const {handleSubmit, handleInput} = useContext(formContext)


  return (
    <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
      <div>
        <input
          onChange={(e) => handleInput("nombre", e)}
          required
          type="text"
          placeholder="Nombre"
        />
      </div>
      <div>
        <input
          onChange={(e) => handleInput("tel", e)}
          required
          type="text"
          placeholder="Telefono"
        />
      </div>
      <div>
        <input
          onChange={(e) => handleInput("email", e)}
          required
          type="text"
          placeholder="Email"
        />
      </div>

      <button className="btn btn-primary">Finalizar compra</button>
    </form>
  );
};
