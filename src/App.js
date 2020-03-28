import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import AuthenticationPage from "./pages/Register&Login/AuthenticationPage";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { SET_CURRENT_USER } from "./reducers/actionTypes.user";

function App() {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          dispatch({
            type: SET_CURRENT_USER,
            payload: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      // Log out user when auth.signout is called
      dispatch({
        type: SET_CURRENT_USER,
        payload: userAuth
      });
    });
    return () => unSubscribe();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <AuthenticationPage />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
