import React from "react";

export const HeaderItemList = ({ category }) => {
  let message;
  let show = true;
  let title;

  switch (category) {
    case ":belleza":
      title = "Belleza";
      message = "Toda la belleza que Nina puede ofrecer";
      break;

    case ":felicidad":
      title = "Felicidad";
      message = "Toda la felicidad concentrada en esta selección";
      break;

    case ":all":
      title = "Cátalogo";
      message = "Todos los producto juntos";
      break;

    default:
      title = "NUESTRAS OFERTAS";
      show = false;
      break;
  }
  return (
    <>
      <div className="row d-flex justify-content-center text-center">
        <h3
          className="h3"
          style={{color: "#d01c5e"}}
        >
          {title}
        </h3>
        <p style={show ? { display: "block" } : { display: "none" }}>
          <b>{message}</b>
        </p>
      </div>
    </>
  );
};
