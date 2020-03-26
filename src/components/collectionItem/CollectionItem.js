import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/cart/cartActions";
import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionFooterName,
  CollectionFooterPrice,
  AddButton
} from "./CollectionItem.styled";

export default function CollectionItem({ id, name, price, imageUrl }) {
  const item = {
    id,
    name,
    price,
    imageUrl
  };
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(item));
  };
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <CollectionFooterName>{name}</CollectionFooterName>
        <CollectionFooterPrice>${price}</CollectionFooterPrice>
      </CollectionFooterContainer>
      <AddButton inverted onClick={handleAddItem}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
}
