import React from "react";
import "./checkoutPage.style.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";

export default function CheckoutPage() {
  const { cartItems } = useSelector(state => state.cart);
  const cartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  );
}
