import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
import { useSelector, useDispatch } from "react-redux";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebaseUtils";
import { UPDATE_COLLECTIONS } from "../../reducers/shop/actionTypes.shop";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

export default function ShopPage({ match }) {
  const { loading } = useSelector(state => state.shop);
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
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner {...props} isLoading={loading} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionsPageWithSpinner {...props} isLoading={loading} />
        )}
      />
    </div>
  );
}
