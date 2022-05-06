import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Pages/Blog/Blog";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import Inventories from "./Pages/Inventories/Inventories";
import SignIn from "./Pages/Sign In/SignIn";
import SignUp from "./Pages/Sign Up/SignUp";
import Footer from "./Pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Inventory from "./Pages/Inventory/Inventory";
import ManageItems from "./Pages/Manage Items/ManageItems";
import AddItem from "./Pages/Add Item/AddItem";
import MyItems from "./Pages/My Items/MyItems";
import Items from "./Pages/Items/Items";
import UpdeteBook from "./Pages/Updete Book/UpdeteBokk";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/inventories" element={<Inventories />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/manage-items" element={<ManageItems />}></Route>
        <Route path="/items" element={<Items />}></Route>
        <Route path="/add-item" element={<AddItem />}></Route>
        <Route path="/my-items" element={<MyItems />}></Route>
        <Route path="/inventory/:bookId" element={<Inventory />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/updete-book/:bookId" element={<UpdeteBook />}></Route>
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
