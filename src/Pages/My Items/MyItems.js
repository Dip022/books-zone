import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Items from "../Items/Items";

const MyItems = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [user] = useAuthState(auth);

  console.log("myBooks", myBooks);
  const email = user?.email;
  useEffect(() => {
    const url = `http://localhost:5000/my-book/${email}`;
    try {
      fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setMyBooks(data));
    } catch (error) {
      console.log(error.response.status);
      console.log(error);
    }
  }, []);
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
