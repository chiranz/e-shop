import React from "react";
import "./checkoutPage.style.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

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
      {cartTotal ? (
        <>
          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242-4242-4242-4242
            <br />
            Exp: 01/20Next
            <br />
            CVV: 123
          </div>
          <StripeButton price={cartTotal} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
