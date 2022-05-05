import React from "react";
import useBooks from "../../hooks/useBooks";
import Product from "../Product/Product";
import "./Inventories.css";

const Inventories = () => {
  const [books] = useBooks();
  return (
    <div className="inventories-containet">
      {books.map((book) => (
        <Product book={book} key={book._id}></Product>
      ))}
    </div>
  );
};

export default Inventories;
