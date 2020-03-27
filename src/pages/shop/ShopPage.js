import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
import { useEffect } from "react";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebaseUtils";
import { useDispatch } from "react-redux";
import { UPDATE_COLLECTIONS } from "../../reducers/shop/actionTypes.shop";

export default function ShopPage({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collections = await convertCollectionsSnapshotToMap(snapshot);
      dispatch({
        type: UPDATE_COLLECTIONS,
        payload: collections
      });
    });
  }, [dispatch]);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}
