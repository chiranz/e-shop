import React from "react";
import "./collectionsOverview.style.scss";
import { useSelector } from "react-redux";
import CollectionPreview from "../collectionPreview/CollectionPreview";

export default function CollectionsOverview({ match }) {
  const { collections } = useSelector(state => state.shop);
  return (
    <div className="collections-overview">
      {Object.values(collections).map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items.slice(0, 4)} />
      ))}
    </div>
  );
}
