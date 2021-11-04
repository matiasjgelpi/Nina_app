export const getUrl = (funcion, categoria) => {
  switch (categoria) {
    case ":category1":
      return funcion.where("category", "==", "category1").get()

    case ":category2":
      return funcion.where("category", "==", "category2").get() 

    default:
      return funcion.where("price", "<=", 300).get() 
  
  }
};
