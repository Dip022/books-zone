import React from "react";
import { Container } from "react-bootstrap";
import useBooks from "../../hooks/useBooks";
import Items from "../Items/Items";
import "./ManageItems.css";

const ManageItems = () => {
  const [books] = useBooks();
  return (
    <div className="mb-5">
      <Container>
        <h1 className="text-center mt-5 mb-3">Manage Items</h1>
        <div className="add-new mb-5">
          <button>Add New Item</button>
        </div>

        <div className="manage-item">
          {books.map((book) => (
            <Items book={book} key={book._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ManageItems;
