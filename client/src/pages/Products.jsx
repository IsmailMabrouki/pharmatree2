// ProductList.jsx

import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import "../styles/Featured.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3600/api/products');
        setProducts(response.data.products); // Update based on your API response structure
       
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <h1>Product List</h1>

      {loading && <p>Loading products...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && products.length > 0 && (
        <div>
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      )}

      {!loading && !error && products.length === 0 && <p>No products available.</p>}

      <style jsx>{`
        .product-list {
          margin: 20px;
          padding: 20px;
          border: 1px solid #ddd;
        }

        .error-message {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default ProductList;
