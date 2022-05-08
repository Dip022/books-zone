import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./Inventory.css";

const Inventory = () => {
  const [book, setBook] = useState({});

  const [updateDelivery, setUpdateDelivery] = useState(false);

  const { bookId } = useParams();

  useEffect(() => {
    fetch(`https://radiant-falls-24615.herokuapp.com/book/${bookId}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [bookId, updateDelivery]);

  const handelStock = (event) => {
    event.preventDefault();
    const stock = event.target.stock.value;
    event.target.reset();
    if (stock < 1) {
      return toast("please provide positive value");
    }
    const addStock = parseInt(book.Stock) + parseInt(stock);
    const updateProduct = { Stock: addStock };
    const url = `https://radiant-falls-24615.herokuapp.com/stock-book/${book._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdateDelivery(!updateDelivery);
        toast(data.message);
      });
  };

  const handelDelivered = (id) => {
    const delivered = book.Stock - 1;
    const updateProduct = { Stock: delivered };
    const url = `https://radiant-falls-24615.herokuapp.com/delivery-book/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdateDelivery(!updateDelivery);
        toast(data.message);
      });
  };

  return (
    <div className="inventory-container">
      <Container>
        <div className="row">
          <div className="col-md-8">
            <div className="inventory-info">
              <img src={book.image} alt="" />
              <div className="inventory-details">
                <h4>{book.name} </h4>
                <p>{book.description}</p>
                <h5>
                  Price: <span>$</span>
                  {book.price}
                </h5>
                <p>
                  Stock:
                  <span> {book.Stock} (books)</span>
                </p>
                <p>Supplier Name: {book.supplierName}</p>
                <button onClick={() => handelDelivered(book._id)}>
                  DELIVERED
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Restock the items</h3>
            <div>
              <form onSubmit={handelStock}>
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock Count book"
                  required
                />
                <input type="submit" value="Add Stoc" />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Inventory;
