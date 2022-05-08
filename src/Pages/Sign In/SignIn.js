import React from "react";
import { Container } from "react-bootstrap";
import "./SignIn.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import Googlesignin from "../Shared/Googlesignin/Googlesignin";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
    toast.success("Sign in success");
  }

  const handelSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);

    fetch("https://radiant-falls-24615.herokuapp.com/singin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        const accessToken = data.accessToken;

        localStorage.setItem("access_token", accessToken);
      });
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
              <span className="text-danger mt-2 d-block">
                {error ? error.message : ""}
              </span>
              <input className="submit" type="submit" value="Sign In" />
            </form>
            <p>
              Need an Account? <Link to="/signup">Sing Up</Link>
            </p>
            <button
              className="forgot"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?{" "}
            </button>
          </div>
          <Googlesignin></Googlesignin>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
