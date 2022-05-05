import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Inventories.css";

const Inventories = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="inventories-containet">
      {products.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </div>
  );
};

export default Inventories;
