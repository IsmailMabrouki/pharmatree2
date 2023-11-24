// Product.js
import React from "react";

const Product = ({ interactions, title, desc }) => {
  return (
    <div className="product">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>Interactions: {interactions}</p>
    </div>
  );
};

export default Product;
