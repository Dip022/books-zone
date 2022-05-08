import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdeteBook = () => {
  const [book, setBook] = useState({});

  const { bookId } = useParams();

  const { name, price, image, Stock, SupplierName, description } = book;

  useEffect(() => {
    const url = `https://radiant-falls-24615.herokuapp.com/book/${bookId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  const handelFormSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const price = event.target.price.value;
    const Stock = event.target.stockBook.value;
    const SupplierName = event.target.supplierName.value;
    const image = event.target.productImage.value;
    const description = event.target.shortDescription.value;

    const bookInfo = {
      name,
      price,
      Stock,
      SupplierName,
      image,
      description,
    };
    const url = `https://radiant-falls-24615.herokuapp.com/update-book/${bookId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    })
      .then((res) => res.json())
      .then((data) => toast.success(data.message));
  };

  return (
    <div className="add-item-container mb-5">
      <h1 className="text-center mt-5 bm-5">Add Item</h1>
      <Container>
        <div className="add-item">
          <div className="update-fild">
            <form onSubmit={handelFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Product Name "
                defaultValue={name}
              />
              <input
                type="number"
                name="price"
                placeholder="Product Price"
                defaultValue={price}
              />
              <input
                type="number"
                name="stockBook"
                placeholder="Stock Book"
                defaultValue={Stock}
              />
              <input
                type="text"
                name="supplierName"
                placeholder="Supplier Name"
                defaultValue={SupplierName}
              />
              <input
                type="text"
                name="productImage"
                placeholder="Product Image URL"
                defaultValue={image}
              />
              <textarea
                type="text"
                name="shortDescription"
                placeholder="Short Description"
                defaultValue={description}
              ></textarea>
              <input
                className="item-submit"
                type="submit"
                value="Update Item"
              />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdeteBook;
