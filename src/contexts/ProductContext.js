import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

//context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //state of products
  const [products, setProducts] = useState([]);

  //fetch product api
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
