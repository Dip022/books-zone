import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ForgotPassword = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handelForgotPass = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    sendPasswordResetEmail(email);
    toast.success("Check your email for reset password");
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handelForgotPass}>
        <input type="email" name="email" placeholder="Email address" required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ForgotPassword;
