import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Items from "../Items/Items";
import "./MyItems.css";

const MyItems = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    const url = `https://radiant-falls-24615.herokuapp.com/my-book/${email}`;
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
    }
  }, []);
  return (
    <div className="my-items-container mt-5 mb-5">
      <Container>
        <h1 className="text-center">My Items</h1>
        <div className="my-item">
          {myBooks.map((book) => (
            <Items book={book} key={book._id}></Items>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyItems;
