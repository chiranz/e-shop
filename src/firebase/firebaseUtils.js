import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBvqoOyXtFl1VbseNX1ueF3sAC-ONopSbw",
  authDomain: "development-3f819.firebaseapp.com",
  databaseURL: "https://development-3f819.firebaseio.com",
  projectId: "development-3f819",
  storageBucket: "development-3f819.appspot.com",
  messagingSenderId: "393651507282",
  appId: "1:393651507282:web:8cddd99da5ad29ede04f8b"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user!!", error.message);
    }
    return userRef;
  }
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
