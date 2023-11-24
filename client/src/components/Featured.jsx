import { connect } from "react-redux";
import React, { useEffect } from "react";
import Product from "./product";
import { fetchMedicineProductsRequest } from "../redux/actions/productAction";

function Featured(props) {
  const { medicineProducts, isLoading, error, fetchMedicineProducts } = props;

  useEffect(() => {
    fetchMedicineProducts();
  }, [fetchMedicineProducts]);

  return (
    <div className="featured-container">
      <div className="container-header">
        <h2>Featured Products</h2>
        <div className="content-link">
          <a className="link-underline" href="#home">
            View All
          </a>
        </div>
      </div>
      <div className="featured-content">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="products">
            {medicineProducts.map((product) => (
              <Product
                key={product.id}
                subtitle="Essential for Women/Men"
                title={product.name}
                desc={product.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  medicineProducts: state.medicineProducts.medicineProducts,
  isLoading: state.medicineProducts.isLoading,
  error: state.medicineProducts.error,
});

const mapDispatchToProps = {
  fetchMedicineProducts: fetchMedicineProductsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
