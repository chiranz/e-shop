import React from "react";
import { withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebaseUtils";
import { useSelector } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartDropDown/CartDropDown";
import {
  WrapperContainer,
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Header.styled";

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
    <WrapperContainer>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>

        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/shop">CONTACT</OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={() => auth.signOut()}>
              LOGOUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin">LOGIN</OptionLink>
          )}
          <CartIcon itemCount={itemCount} />
        </OptionsContainer>
        {hidden ? null : <CartDropDown history={history} />}
      </HeaderContainer>
    </WrapperContainer>
  );
}
export default withRouter(Header);
