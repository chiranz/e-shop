import React from "react";
import "./cartDropDown.style.scss";
import CustomButton from "../CustomButton/CustomButton";

export default function CartDropDown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
}
