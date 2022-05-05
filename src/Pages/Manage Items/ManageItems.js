import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Items from "../Items/Items";
import "./ManageItems.css";

const ManageItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="mb-5">
      <Container>
        <h1 className="text-center mt-5 mb-3">Manage Items</h1>
        <div className="add-new mb-5">
          <button>Add New Item</button>
        </div>

        <div className="manage-item">
          {items.map((item) => (
            <Items items={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ManageItems;
