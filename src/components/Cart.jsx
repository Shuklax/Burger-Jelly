import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [btnState, setBtnState] = useState(true);

  const handleClearCart = () => {
    if (cartItems.length === 0) {
      setBtnState(true);
    }
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="text-white bg-black m-4 p-2 font-semibold rounded-lg"
          onClick={handleClearCart}
        >
          CLEAR CART
        </button>
        {btnState && cartItems.length === 0 ? (
          <p className="font-semibold bg-slate-500 text-black rounded-lg translate-x-12 w-4/12 justify-between">
            The cart is already empty
          </p>
        ) : null}
        <div>
          {cartItems.map((i) => (
            <ItemList key={i?.id} data={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
