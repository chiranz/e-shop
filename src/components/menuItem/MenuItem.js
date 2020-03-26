import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from "./MenuItem.styled";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <MenuItemContainer
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <BackgroundImage imageUrl={imageUrl} />
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>Shop Now</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
