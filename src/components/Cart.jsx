import { useState } from "react"
import { useSelector } from "react-redux";

const Cart = () => {
    const items = useSelector((store)=> store.cart.items)
    {
        items.map((item)=> {
            <div>
                <h1>{item.name}</h1>
                <p>{item.price}</p>
            </div>
        })
    }
}

export default Cart;