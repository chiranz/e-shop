import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { AuthenticationPageContainer } from "./AuthenticationPage.styled";

export default function AuthenticationPage() {
  return (
    <AuthenticationPageContainer>
      <SignIn />
      <SignUp />
    </AuthenticationPageContainer>
  );
}
