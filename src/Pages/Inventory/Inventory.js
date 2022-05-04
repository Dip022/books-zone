import React from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { bookId } = useParams();
  return (
    <div>
      <h2>Inventory id {bookId} </h2>
    </div>
  );
};

export default Inventory;
