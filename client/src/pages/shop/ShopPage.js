import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
import { useSelector, useDispatch } from "react-redux";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import { fetchCollectionsStartAsync } from "../../reducers/shop/shopActions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

export default function ShopPage({ match }) {
  const { isFetching } = useSelector(state => state.shop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner {...props} isLoading={isFetching} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionsPageWithSpinner {...props} isLoading={isFetching} />
        )}
      />
    </div>
  );
}
