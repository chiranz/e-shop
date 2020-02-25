import React from "react";
import "./collectionItem.style.scss";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/cart/cartActions";

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
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={handleAddItem}>
        Add to cart
      </CustomButton>
    </div>
  );
}
