import React from "react";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
import { useSelector } from "react-redux";

export default function ShopPage() {
  const { collections } = useSelector(state => state.shop);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}
