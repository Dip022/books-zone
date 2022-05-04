import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import Googlesignin from "../Shared/Googlesignin/Googlesignin";

const SignUp = () => {
  const [passError, setPassError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/home");
  }

  const handelSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const conPassword = event.target.conPassword.value;

    if (password === conPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      toast.success("Sign up success");
      event.target.reset();
    } else {
      setPassError("Possword and Conform password not match");
    }
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
              <span className="text-danger mt-2 d-block">{passError}</span>
              <span className="text-danger mt-2 d-block">
                {error ? error.message : ""}
              </span>
              <input className="submit" type="submit" value="Sign In" />
            </form>
            <p>
              Have an Account? <Link to="/signin">Sing in</Link>
            </p>
          </div>
          <Googlesignin></Googlesignin>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
