import React from "react";
import "./authenticationPage.style.scss";
import SignIn from "../../components/SignIn/SignIn";

export default function AuthenticationPage() {
  return (
    <div className="authentication-page">
      <SignIn />
    </div>
  );
}
