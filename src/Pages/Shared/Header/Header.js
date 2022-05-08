import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import logo from "../../../image/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="nav-bar"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-link menu-bar">
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/inventories">Inventories</CustomLink>
              {user ? (
                <>
                  <CustomLink to="/manage-items">Manage Items</CustomLink>
                  <CustomLink to="/add-item">Add Item</CustomLink>
                  <CustomLink to="/my-items">My Items</CustomLink>
                </>
              ) : (
                <></>
              )}
              <CustomLink to="/blog">Blog</CustomLink>
              {user ? (
                <button className="logout-btn" onClick={() => signOut(auth)}>
                  Logout
                </button>
              ) : (
                <>
                  <CustomLink to="/signin">Sign In</CustomLink>
                  <CustomLink to="/signup">Sign Up</CustomLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
