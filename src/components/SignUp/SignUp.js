import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/firebaseUtils";
import { FormContainer, FormTitle } from "../SignIn/SignIn.styled";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const clearInputField = () => {
    setEmail("");
    setDisplayName("");
    setPassword("");
    setConfirmPassword("");
  };
  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      clearInputField();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <FormTitle>I do not have and account</FormTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          label="Display Name"
          name="displayName"
          value={displayName}
          type="text"
          handleChange={setDisplayName}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={setEmail}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={setPassword}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={setConfirmPassword}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </FormContainer>
  );
}

export default SignUp;
