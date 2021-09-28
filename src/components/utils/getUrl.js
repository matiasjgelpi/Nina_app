export const getUrl = (categoria) => {
  switch (categoria) {
    case ":jewelery":
      return "https://fakestoreapi.com/products/category/jewelery";

    case ":electronics":
      return "https://fakestoreapi.com/products/category/electronics";

    default:
      return "https://fakestoreapi.com/products";
  }
};
