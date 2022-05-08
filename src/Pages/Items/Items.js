import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Items.css";

const Items = ({ book, deleteBook, setDeleteBook }) => {
  const { _id, name, image, price, Stock, SupplierName, description } = book;

  const navigate = useNavigate();
  const handelDelete = (id) => {
    if (window.confirm("are you sure delect book")) {
      const url = `https://radiant-falls-24615.herokuapp.com/remove-book/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setDeleteBook(!deleteBook);
          toast(data.message);
        });
    }
  };

  return (
    <div className="items-container">
      <div className="items">
        <div className="book-img">
          <img src={image} alt="" />
        </div>
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
        <button
          className="edit"
          onClick={() => navigate(`/updete-book/${_id}`)}
        >
          Edit
        </button>
        <button className="delete" onClick={() => handelDelete(_id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Items;
