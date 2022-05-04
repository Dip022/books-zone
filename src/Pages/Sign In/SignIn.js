import React from "react";
import { Container } from "react-bootstrap";
import "./SignIn.css";
import google from "../../imade/google.png";

const SignIn = () => {
  const handelSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="signIn-container ">
      <Container>
        <div className="form-area mx-auto">
          <div className="sign-in">
            <h3 className="text-center">Sign In</h3>
            <form onSubmit={handelSignIn}>
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
          <div className="social-login">
            <span className="text-center d-block">or</span>
            <button>
              <img src={google} alt="" />
              Google Sign In
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
