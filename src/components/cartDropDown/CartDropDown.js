import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../cart-item/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_CART_HIDDEN } from "../../reducers/actionTypes";
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage
} from "./CartDropDown.styled";

function CartDropDown({ history }) {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleCheckoutClick = () => {
    history.push("/checkout");
    dispatch({
      type: TOGGLE_CART_HIDDEN
    });
  };
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem, i) => <CartItem key={i} item={cartItem} />)
        ) : (
          <EmptyMessage>Your cart is empty!</EmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButton onClick={handleCheckoutClick}>Go To Checkout</CustomButton>
    </CartDropDownContainer>
  );
}

export default CartDropDown;
