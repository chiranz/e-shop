import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeButton({ price }) {
  const priceForStripe = +price * 100;
  const publishableKey = "pk_test_JZZKhqVXu5TnHD2bhcoUOQc9";
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="E Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      currency="USD"
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
