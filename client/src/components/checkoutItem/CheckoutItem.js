import React from "react";
import { useDispatch } from "react-redux";
import {
  CLEAR_ITEM_FROM_CART,
  ADD_ITEM,
  REMOVE_ITEM
} from "../../reducers/actionTypes.user";
import {
  CheckoutImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButton,
  CheckoutItemContainer
} from "./CheckoutItem.styled";

export default function CheckoutItem({ cartItem }) {
  const { imageUrl, price, name, quantity } = cartItem;
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch({
      type: CLEAR_ITEM_FROM_CART,
      payload: cartItem
    });
  };
  const handleAddItem = () => {
    dispatch({
      type: ADD_ITEM,
      payload: cartItem
    });
  };
  const handleRemoveItem = () => {
    dispatch({
      type: REMOVE_ITEM,
      payload: cartItem
    });
  };

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt="item" />
      </CheckoutImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={handleRemoveItem}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={handleAddItem}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButton onClick={handleRemoveFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
