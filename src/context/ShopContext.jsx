import { createContext, useEffect, useState } from "react";
import useAlert from "../hooks/useAlert";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const { alertMessage, showAndHide } = useAlert();

  const [cart, setCart] = useState([]);
  // use state for saving our products
  const [products, setProducts] = useState([]);

  // useEffect for fetching the products on every load
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // function for fetching our products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/marketify");
    const data = await res.json();

    setProducts(data);
  };

  const topSelling = products.filter((product) => product.topSelling == true);

  const addToCart = (product) => {
    const existingItem = cart.findIndex((item) => item.id === product.id);

    if (existingItem !== -1) {
      showAndHide("error", "item exists in cart");
    } else {
      setCart([...cart, product]);
      showAndHide("success", "item added to cart");
    }
  };

  return (
    <ShopContext.Provider
      value={{ products, topSelling, cart, addToCart, alertMessage }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
