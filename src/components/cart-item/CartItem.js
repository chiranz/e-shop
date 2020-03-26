import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  ItemName
} from "./CartItem.styled";

export default function CartItem({
  item: { imageUrl, price, name, quantity }
}) {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}
