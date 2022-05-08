import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Product from "../Product/Product";
import "./Inventories.css";

const Inventories = () => {
  const [books, setBooks] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);

  // add book list
  useEffect(() => {
    const url = `https://radiant-falls-24615.herokuapp.com/book-list?page=${page}&limit=${limit}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [page, limit]);

  //add book count
  useEffect(() => {
    fetch("https://radiant-falls-24615.herokuapp.com/book-count")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const page = Math.ceil(count / limit);
        setPageCount(page);
      });
  }, [limit]);

  return (
    <div className="mt-5 mb-5">
      <h1 className="mt-5 mb-5 text-center">Inventory</h1>
      <Container>
        <div className="inventories-containet">
          {books.map((book) => (
            <Product book={book} key={book._id}></Product>
          ))}
        </div>
        <div className="count-container">
          <div className="count-page">
            {[...Array(pageCount).keys()].map((num) => (
              <button onClick={() => setPage(num)} key={num}>
                {num + 1}
              </button>
            ))}

            <select
              className="btn-peges"
              defaultValue={5}
              onChange={(e) => setLimit(e.target.value)}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Inventories;
