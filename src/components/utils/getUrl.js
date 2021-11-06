export const getUrl = (funcion, categoria) => {
  switch (categoria) {
    case ":belleza":
      return funcion.where("category", "==", "belleza").get();
    case ":felicidad":
      return funcion.where("category", "==", "felicidad").get();
    case ":all":
      return funcion.get();
    default:
      return funcion.where("price", "<=", 300).get();
  }
};
