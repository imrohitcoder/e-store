import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="prodcut_wrapper">
        {products.map((product) => (
          <div className="cartCard">
            <h3>{product.title}</h3>
            <img src={product.images[0]} alt="" />
            <h3>$ {product.price}</h3>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
