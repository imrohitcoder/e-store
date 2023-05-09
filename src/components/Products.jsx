import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./products.css";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      // const res = await fetch("https://api.escuelajs.co/api/v1/products");
      // const data = await res.json();
      // setItems(data);
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  console.log(items);
  const handleAddBtn = (item) => {
    dispatch(add(item));
  };
  // fetchProducts();
  return (
    <div className="Store">
      {items.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.images[0]} alt="" />
          <h4>$ {item.price}</h4>
          <button onClick={() => handleAddBtn(item)}>add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
