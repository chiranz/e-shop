import React from "react";
import "./cartDropDown.style.scss";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../cart-item/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { TOGGLE_CART_HIDDEN } from "../../reducers/actionTypes";

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
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem, i) => <CartItem key={i} item={cartItem} />)
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <CustomButton onClick={handleCheckoutClick}>Go To Checkout</CustomButton>
    </div>
  );
}

export default withRouter(CartDropDown);
