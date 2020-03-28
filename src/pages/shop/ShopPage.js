import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
import { useSelector } from "react-redux";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

export default function ShopPage({ match }) {
  const { loading } = useSelector(state => state.shop);

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
