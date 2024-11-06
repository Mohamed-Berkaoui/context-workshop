import { createContext, useEffect, useState } from "react";

export const productStore = createContext();

function Products({ children }) {
  const [productState, setProductState] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => setProductState(json));
  }, []);
  return (
    <productStore.Provider value={{ productState, setProductState }}>
      {children}
    </productStore.Provider>
  );
}

export default Products;
