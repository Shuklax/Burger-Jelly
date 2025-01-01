import { useState } from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        {cartItems.map((i)=>(
            <ItemList key={i?.id} data={i}/>
        ))}
      </div>
    </div>
  );
};

export default Cart;
