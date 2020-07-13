import React from "react";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../reducers/cart/cartActions";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styled";

export default function CartIcon({ itemCount }) {
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <CartIconContainer onClick={handleCartToggle}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
}
