import React from "react";
import "./authenticationPage.style.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

export default function AuthenticationPage() {
  return (
    <div className="authentication-page">
      <SignIn />
      <SignUp />
    </div>
  );
}
