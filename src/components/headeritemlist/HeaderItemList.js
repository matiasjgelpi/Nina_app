import React from "react";

export const HeaderItemList = ({ category }) => {
  let message;
  let show = true;
  let title;

  switch (category) {
    case ":category1":
      title = "Categoria 1";
      message = "descripcion de categoria 1";

      break;

    case ":category2":
      title = "Categoria 2";
      message = "descripcion de categoria 2";
      break;

    default:
      message = "Ofertas destacadas";
      show = false;
      break;
  }
  return (
    <>
      <div className="row d-flex justify-content-center text-center">
        <h3
          className="h3"
          style={show ? { display: "block" } : { display: "none" }}
        >
          {title}
        </h3>
        <p><b>{message}</b></p>
      </div>
    </>
  );
};
