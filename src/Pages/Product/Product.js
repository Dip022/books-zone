import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";

const Product = ({ book }) => {
  const { _id, name, image, price, Stock, supplierName, description } = book;

  const navigate = useNavigate();

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
      <button onClick={() => navigate(`/inventory/${_id}`)}>
        <span className="btn-text">Stock Update</span>
      </button>
    </div>
  );
};

export default Product;
