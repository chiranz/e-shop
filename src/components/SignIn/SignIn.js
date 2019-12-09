import React, { useState } from "react";
import "./signIn.style.scss";

import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { signInWithGoogle } from "../../firebase/firebaseUtils";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setEmail(() => "");
    setPassword(() => "");
  }
  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      if (e.target.name === "password") {
        setPassword(e.target.value);
      }
    }
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
          handleChange={handleChange}
          required
        />
        <FormInput
          label="password"
          name="password"
          value={password}
          type="password"
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          Sign in with Google
        </CustomButton>
      </form>
    </div>
  );
}
