import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";

const Product = ({ book }) => {
  const { _id, name, image, price, Stock, SupplierName, description } = book;

  const navigate = useNavigate();

  return (
    <div className="product-container">
      <div className="products">
        <div className="book-img">
          <img src={image} alt="" />
        </div>
        <h4>{name}</h4>
        <p>{description}</p>
        <p>
          Price: <span>$</span>
          {price}
        </p>
        <p>Stock: {Stock}</p>
        <p>Supplier Name: {SupplierName}</p>
      </div>
      <div className="stock-update">
        <button onClick={() => navigate(`/inventory/${_id}`)}>
          <span className="btn-text">Stock Update</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
