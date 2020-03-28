import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../collectionPreview/CollectionPreview";
import { CollectionsOverviewContainer } from "./CollectionsOverview.styled";

export default function CollectionsOverview() {
  let { collections } = useSelector(state => state.shop);

  return (
    <CollectionsOverviewContainer>
      {Object.values(collections).map(({ id, title, routeName, items }) => (
        <CollectionPreview
          key={id}
          title={title}
          routeName={routeName}
          items={items.slice(0, 4)}
        />
      ))}
    </CollectionsOverviewContainer>
  );
}
