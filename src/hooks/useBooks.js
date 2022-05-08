import { useState, useEffect } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://radiant-falls-24615.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return [books];
};

export default useBooks;
