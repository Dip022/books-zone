import React from "react";
import "./product.css";

const Product = ({ product }) => {
  const { name, image, price, Stock, supplierName, description } = product;
  return (
    <div className="product-container">
      <div className="products">
        <img src={image} alt="" />
        <h4>{name}</h4>
        <p>{description}</p>
        <p>
          Price: <span>$</span>
          {price}
        </p>
        <p>Stock: {Stock}</p>
        <p>Supplier Name: {supplierName}</p>
      </div>
      <button>Stock Update</button>
    </div>
  );
};

export default Product;
