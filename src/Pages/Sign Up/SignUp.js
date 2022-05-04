import React from "react";
import { Container } from "react-bootstrap";
import google from "../../imade/google.png";

const SignUp = () => {
  const handelSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const conPassword = event.target.conPassword.value;
    console.log(name, email, password, conPassword);
  };
  return (
    <div className="signIn-container ">
      <Container>
        <div className="form-area mx-auto">
          <div className="sign-in">
            <h3 className="text-center">Sign Up</h3>
            <form onSubmit={handelSignUp}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                required
              />
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
              <label>Confirm Password</label>
              <input
                type="password"
                name="conPassword"
                id=""
                required
                placeholder="Confirm Password"
              />
              <input className="submit" type="submit" value="Sign In" />
            </form>
            <p>Have an Account? </p>
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

export default SignUp;
