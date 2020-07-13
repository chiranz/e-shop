import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collectionItem/CollectionItem";
import {
  CollectionPageContainer,
  TitleContainer,
  CollectionItemsContainer
} from "./CollectionPage.styled";

export default function CollectionPage({ match }) {
  const { collections } = useSelector(state => state.shop);
  const { collectionId } = match.params;
  const { title, items } = collections[collectionId];

  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
}
