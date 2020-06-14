import React from "react";
import "./sign-in-sign-un.scss";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

const SignInAndUp = () => {
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndUp;
