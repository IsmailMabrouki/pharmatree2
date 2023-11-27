// Product.jsx
import React from 'react';
import "../styles/Featured.css";

const Product = ({ name, description, category, price, image }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <img src={image} alt={`${name} Image`} width="100" />
    </div>
  );
};

export default Product;
