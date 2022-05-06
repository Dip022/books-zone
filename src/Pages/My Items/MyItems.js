import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Items from "../Items/Items";

const MyItems = () => {
  const [myBooks, setMyBooks] = useState([]);
  console.log("adfadf", myBooks);
  const [user] = useAuthState(auth);

  const email = user?.email;
  useEffect(() => {
    const url = `http://localhost:5000/my-book/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyBooks(data));
  }, [email]);
  return (
    <div className="my-items-container mt-5 mb-5">
      <Container>
        <h1 className="text-center">My Items</h1>
        {myBooks.map((book) => (
          <Items book={book} key={book._id}></Items>
        ))}
      </Container>
    </div>
  );
};

export default MyItems;
