import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Inventories.css";

const Inventories = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(products);
  return (
    <div className="inventories-containet">
      {products.map((product) => (
        <Product product={product} key={product._id}></Product>
      ))}
    </div>
  );
};

export default Inventories;
