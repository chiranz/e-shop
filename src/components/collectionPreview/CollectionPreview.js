import React from "react";
import CollectionItem from "../collectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./CollectionPreview.styled";

export default function CollectionPreview({ title, items }) {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title}</TitleContainer>
      <PreviewContainer>
        {items.map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}
