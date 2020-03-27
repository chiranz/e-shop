import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../collectionPreview/CollectionPreview";
import { CollectionsOverviewContainer } from "./CollectionsOverview.styled";

export default function CollectionsOverview() {
  const { collections } = useSelector(state => state.shop);
  return (
    <CollectionsOverviewContainer>
      {Object.values(collections).map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items.slice(0, 4)} />
      ))}
    </CollectionsOverviewContainer>
  );
}
