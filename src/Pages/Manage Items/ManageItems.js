import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Items from "../Items/Items";
import "./ManageItems.css";

const ManageItems = () => {
  const [deleteBook, setDeleteBook] = useState(false);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [deleteBook]);
  return (
    <div className="mb-5">
      <Container>
        <h1 className="text-center mt-5 mb-3">Manage Items</h1>
        <div className="add-new mb-5">
          <button>Add New Item</button>
        </div>

        <div className="manage-item">
          {books.map((book) => (
            <Items
              book={book}
              key={book._id}
              deleteBook={deleteBook}
              setDeleteBook={setDeleteBook}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ManageItems;
