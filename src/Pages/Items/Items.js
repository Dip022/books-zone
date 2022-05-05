import React from "react";
import "./Items.css";

const Items = ({ items }) => {
  const { name, image, price, Stock, SupplierName, description } = items;
  return (
    <div className="items-container">
      <div className="items">
        <img src={image} alt="" />
        <h5>Book Name: {name}</h5>
        <p>
          Price: <small>$</small>
          {price}
        </p>
        <p>Description: {description}</p>
        <p>Stock: {Stock}</p>
        <p>Supplier Name: {SupplierName}</p>
      </div>
      <div className="updat-info">
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export default Items;
