import React from "react";
import { Container } from "react-bootstrap";
import "./AddItem.css";

const AddItem = () => {
  return (
    <div className="add-item-container mb-5">
      <h1 className="text-center mt-5 bm-5">Add Item</h1>
      <Container>
        <div className="add-item">
          <div className="update-fild">
            <form>
              <input type="text" name="name" placeholder="Product Name" />
              <input type="number" name="price" placeholder="Product Price" />
              <input type="number" name="stockBook" placeholder="Stock Book" />
              <input
                type="text"
                name="supplierName"
                placeholder="Supplier Name"
              />
              <input
                type="text"
                name="product-Image"
                placeholder="Product Image URL"
              />
              <textarea
                type="text"
                name="shortDescription"
                placeholder="Short Description"
              ></textarea>
              <input className="item-submit" type="submit" value="Add Item" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddItem;
