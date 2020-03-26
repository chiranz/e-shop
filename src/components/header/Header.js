import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";
import { auth } from "../../firebase/firebaseUtils";
import { useSelector } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartDropDown/CartDropDown";

function Header({ history }) {
  const {
    user: { currentUser },
    cart: { hidden, cartItems }
  } = useSelector(state => state);

  const itemCount = cartItems.reduce(
    (itemCount, cartItem) => itemCount + cartItem.quantity,
    0
  );
  return (
    <div className="wrapper">
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link to="/shop" className="option">
            SHOP
          </Link>
          <Link to="/shop" className="option">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              LOGOUT
            </div>
          ) : (
            <Link to="/signin" className="option">
              LOGIN
            </Link>
          )}
          <CartIcon itemCount={itemCount} />
        </div>
        {hidden ? null : <CartDropDown history={history} />}
      </div>
    </div>
  );
}
export default withRouter(Header);
