import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import AuthenticationPage from "./pages/Register&Login/AuthenticationPage";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { SET_CURRENT_USER } from "./actions/types";

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
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <AuthenticationPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
