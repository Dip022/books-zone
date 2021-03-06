import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import google from "../../../image/google.png";

const Googlesignin = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (user) {
    toast.success("Login success");
    navigate("/home");
  }
  return (
    <div>
      <div className="social-login">
        <span className="text-center d-block">or</span>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          <img src={google} alt="" />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Googlesignin;
