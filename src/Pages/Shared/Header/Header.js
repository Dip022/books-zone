import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

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
          <Navbar.Brand href="#home">Books Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-link">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventories">
                Inventories
              </Nav.Link>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/manage-items">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/add-item">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="/my-items">
                    My Items
                  </Nav.Link>
                </>
              ) : (
                <></>
              )}
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              {user ? (
                <button className="logout-btn" onClick={() => signOut(auth)}>Logout</button>
              ) : (
                <>
                  <Nav.Link as={Link} to="/signin">
                    Sign In
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Sign Up
                  </Nav.Link>
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
