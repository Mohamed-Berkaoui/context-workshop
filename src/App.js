import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Cart from "./pages/Cart";
import CartProvider from './context/Cart'
import Products, { productStore } from "./context/Products";

function App() {
  return (
    <Products>
      <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>
    </Products>
  );
}

export default App;
