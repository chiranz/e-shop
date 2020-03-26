import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./FormInput.styled";

export default function FormInput({ handleChange, label, ...props }) {
  return (
    <GroupContainer>
      <FormInputContainer
        {...props}
        onChange={e => handleChange(e.target.value)}
        onFocus={() => console.log(props.value.length)}
      />
      {label ? (
        <FormInputLabel
          className={`${props.value.length ? "shrink" : ""}`}
          htmlFor={label.toLowerCase()}
        >
          {label.toUpperCase()}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
}
