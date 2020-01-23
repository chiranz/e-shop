import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import AuthenticationPage from "./pages/Register&Login/AuthenticationPage";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => unSubscribe();
  }, []);
  console.log(currentUser);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
