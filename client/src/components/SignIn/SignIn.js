import React, { useState } from "react";

import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { signInWithGoogle, auth } from "../../firebase/firebaseUtils";
import { FormTitle, FormContainer, ButtonsContainer } from "./SignIn.styled";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clearFields = () => {
    setEmail("");
    setPassword("");
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
    clearFields();
  }

  return (
    <FormContainer>
      <FormTitle>I already have an account!</FormTitle>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          value={email}
          type="email"
          handleChange={setEmail}
          required
        />
        <FormInput
          label="password"
          name="password"
          value={password}
          type="password"
          handleChange={setPassword}
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </FormContainer>
  );
}
