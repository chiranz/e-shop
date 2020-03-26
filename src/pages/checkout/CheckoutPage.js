import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  CheckoutTotal,
  TestWarningContainer
} from "./CheckoutPage.styled";

export default function CheckoutPage() {
  const { cartItems } = useSelector(state => state.cart);
  const cartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotal>
        <span>Total: ${cartTotal}</span>
      </CheckoutTotal>
      {cartTotal ? (
        <>
          <TestWarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242-4242-4242-4242
            <br />
            Exp: 01/20Next
            <br />
            CVV: 123
          </TestWarningContainer>
          <StripeButton price={cartTotal} />
        </>
      ) : (
        ""
      )}
    </CheckoutPageContainer>
  );
}
