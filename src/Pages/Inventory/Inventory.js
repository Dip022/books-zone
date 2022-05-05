import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const [book, setBook] = useState({});
  const { bookId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/book/${bookId}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [bookId]);

  return (
    <div>
      <h2>{book.name} </h2>
    </div>
  );
};

export default Inventory;
