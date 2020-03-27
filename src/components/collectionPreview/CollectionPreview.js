import React from "react";
import CollectionItem from "../collectionItem/CollectionItem";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./CollectionPreview.styled";
import { Link } from "react-router-dom";

export default function CollectionPreview({ title, items, routeName }) {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>
        <Link to={`shop/${routeName}`}>{title}</Link>
      </TitleContainer>
      <PreviewContainer>
        {items.map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}
