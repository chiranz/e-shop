import React from "react";
import "./collectionsOverview.style.scss";
import { useSelector } from "react-redux";
import CollectionPreview from "../collectionPreview/CollectionPreview";

export default function CollectionsOverview() {
  const { collections } = useSelector(state => state.shop);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}
