import React from "react";
import "./cartDropDown.style.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../cart-item/CartItem";
import { useSelector } from "react-redux";

export default function CartDropDown() {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem, i) => (
          <CartItem key={i} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
}
