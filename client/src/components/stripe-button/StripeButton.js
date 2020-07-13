import React from "react";
import Axios from "axios";
import StripeCheckout from "react-stripe-checkout";

export default function StripeButton({ price }) {
  const priceForStripe = +price * 100 * 70;
  const publishableKey = "pk_test_JZZKhqVXu5TnHD2bhcoUOQc9";
  const onToken = (token) => {
    Axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        console.log(response);
        alert("Payment was successful!");
      })
      .catch((err) => {
        console.log("Payment Error: ");
        alert(
          "There was an issue with your payment. Please provide valid card details"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="E Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      currency="inr"
      description={`Your total is ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
