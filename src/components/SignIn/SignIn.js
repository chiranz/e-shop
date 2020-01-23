import React, { useState } from "react";
import "./signIn.style.scss";

import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { signInWithGoogle, auth } from "../../firebase/firebaseUtils";

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
    <div className="sign-in">
      <h2>I already have an account!</h2>
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
