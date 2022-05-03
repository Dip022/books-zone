import { Container } from "react-bootstrap";
import Inventories from "../Inventories/Inventories";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Container>
        <h1 className="mt-5 mb-5 text-center">Inventory</h1>
        <Inventories></Inventories>
      </Container>
    </div>
  );
};

export default Home;
