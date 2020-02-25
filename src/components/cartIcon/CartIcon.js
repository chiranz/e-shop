import React from "react";
import "./cartIcon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../reducers/cart/cartActions";

export default function CartIcon({ itemCount }) {
  const dispatch = useDispatch();

  const handleCartToggle = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-icon" onClick={handleCartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}
