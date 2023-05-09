import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../components/firebase";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navlink.css";
// import Products from "../components/Products";

const NavLink = () => {
  const [isUser, setIsUser] = useState("");
  const items = useSelector((state) => state.cart);

  const signInBtn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setIsUser(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setIsUser(localStorage.getItem("email"));
  }, []);
  const logOutBtn = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <div className="nav_link">
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#000",
          }}
        >
          Home
        </Link>
        <Link
          to={"cart"}
          style={{ textDecoration: "none", color: "#000", marginLeft: "14px" }}
        >
          Cart
        </Link>
      </div>
      <div className="cart_items">cartItems {items.length}</div>

      <div className="userLogin">
        {!isUser && <button onClick={signInBtn}>SignIn</button>}
        {isUser && <button onClick={logOutBtn}>LogOut</button>}
      </div>
    </div>
  );
};

export default NavLink;
