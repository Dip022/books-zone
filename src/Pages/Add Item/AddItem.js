import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container } from "react-bootstrap";
import Loading from "../Shared/Loading/Loading";
import "./AddItem.css";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
const AddItem = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  const handelFormSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const price = event.target.price.value;
    const Stock = event.target.stockBook.value;
    const SupplierName = event.target.supplierName.value;
    const image = event.target.productImage.value;
    const description = event.target.shortDescription.value;
    const email = user.email;

    if (price < 0 || Stock < 0) {
      return toast.error("Your price and Stock not nagetive value");
    }
    const addBook = {
      name,
      price,
      Stock,
      SupplierName,
      image,
      description,
      email,
    };

    fetch("http://localhost:5000/add-book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addBook),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.message);

        event.target.reset();
      });
  };

  return (
    <div className="add-item-container mb-5">
      <h1 className="text-center mt-5 bm-5">Add Item</h1>
      <Container>
        <div className="add-item">
          <div className="update-fild">
            <form onSubmit={handelFormSubmit}>
              <input type="text" name="name" placeholder="Product Name" />
              <input type="number" name="price" placeholder="Product Price" />
              <input type="number" name="stockBook" placeholder="Stock Book" />
              <input
                type="text"
                name="supplierName"
                placeholder="Supplier Name"
              />
              <input
                type="text"
                name="productImage"
                placeholder="Product Image URL"
              />
              <textarea
                type="text"
                name="shortDescription"
                placeholder="Short Description"
              ></textarea>
              <input className="item-submit" type="submit" value="Add Item" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddItem;
