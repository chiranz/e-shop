import React from "react";
import "./checkoutItem.style.scss";
import { useDispatch } from "react-redux";
import {
  CLEAR_ITEM_FROM_CART,
  ADD_ITEM,
  REMOVE_ITEM
} from "../../reducers/actionTypes";

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
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleRemoveFromCart}>
        &#10005;
      </div>
    </div>
  );
}
