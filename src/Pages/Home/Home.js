import { Container } from "react-bootstrap";
import useBooks from "../../hooks/useBooks";
import Product from "../Product/Product";
import Slider from "../Slider/Slider";
import { ArrowRightIcon } from "@heroicons/react/solid";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [books] = useBooks();

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Slider></Slider>
      <Container>
        <h1 className="mt-5 mb-5 text-center">Inventory</h1>
        <div className="inventories-containet">
          {books.slice(0, 3).map((book) => (
            <Product book={book} key={book._id}></Product>
          ))}
        </div>
        <div className="see-all ">
          <button onClick={() => navigate("/inventories")}>
            <span className="d-block">See All Books</span>{" "}
            <ArrowRightIcon className="icon" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
