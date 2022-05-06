import React, { useEffect, useState } from "react";

import Product from "../Product/Product";
import "./Inventories.css";

const Inventories = () => {
  const [books, setBooks] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);

  // add book list
  useEffect(() => {
    const url = `http://localhost:5000/book-list?page=${page}&limit=${limit}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [page, limit]);

  //add book count
  useEffect(() => {
    fetch("http://localhost:5000/book-count")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const page = Math.ceil(count / limit);
        setPageCount(page);
      });
  }, [limit]);

  return (
    <div className="inventories-containet">
      {books.map((book) => (
        <Product book={book} key={book._id}></Product>
      ))}
      <div>
        {[...Array(pageCount).keys()].map((num) => (
          <button onClick={() => setPage(num)} key={num}>
            {num + 1}
          </button>
        ))}

        <select defaultValue={5} onChange={(e) => setLimit(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  );
};

export default Inventories;
