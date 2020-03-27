import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./WithSpinner.styled";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  const spinner = isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
  return spinner;
};
export default WithSpinner;
