import React, { useContext } from "react";
import { productStore } from "../context/Products";
import { addAction, cartStore } from "../context/Cart";

function Home() {
  const ProductStore = useContext(productStore);
const CartStore=useContext(cartStore)
  return (
    <div className="home">
      {ProductStore.productState.map((prod) => (
        <div className="box">
                <img src={prod.image} alt="" />
                    <h4>{prod.title} </h4>
                    <button onClick={()=>CartStore.dispatchCart(addAction(prod))}>add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
