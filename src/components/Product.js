import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <div className="wrapper">
      <div>Shopping Cart: 0 total items.</div>
      <div>Total: 0</div>
      <div className="product"> </div>
      <button>Add</button> <button>Remove</button>
    </div>
  );
};

export default Product;
