import React from "react";
import "./collectionPage.style.scss";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collectionItem/CollectionItem";

export default function CollectionPage({ match }) {
  const { collections } = useSelector(state => state.shop);
  const { collectionId } = match.params;
  const { title, items } = collections[collectionId];

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
