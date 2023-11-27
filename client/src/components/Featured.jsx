import React, { useState, useEffect, useRef } from "react";
import Product from "./Product";
import "../styles/Featured.css";

function Featured() {
  const [medicineProducts, setMedicineProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      // Component will unmount, set isMounted to false
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchMedicineProducts = async () => {
      try {
        const response = await fetch("http://localhost:3600/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
    
        // Check if the component is still mounted before updating state
        if (isMounted.current) {
          setMedicineProducts(data.products);
          setIsLoading(false);
        }
      } catch (error) {
        // Check if the component is still mounted before updating state
        if (isMounted.current) {
          setError(error);
          setIsLoading(false);
        }
      }
    };
    

    fetchMedicineProducts();
  }, []);

  return (
    <div className="featured-container">
       <div className="container-header">
        <h2>Featured Products</h2>
        <div className="content-link">
          <a className="link-underline" href="/products">
            View All
          </a>
        </div>
      </div>
      <div className="featured-content">
        {isLoading ? (
          <div>Fetching Featured Products...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="products">
            {medicineProducts.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                category={product.category}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Featured;

