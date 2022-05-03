import React from "react";
import { Container } from "react-bootstrap";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signIn-container ">
      <Container>
        <div className="sign-in mx-auto">
          <h3 className="text-center">Sign In</h3>
          <form>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Eamil Address"
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              id=""
              required
              placeholder="Password"
            />
            <input className="submit" type="submit" value="Sign In" />
          </form>
          <p>Need an Account?</p>
          <p>Forgot Password?</p>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
