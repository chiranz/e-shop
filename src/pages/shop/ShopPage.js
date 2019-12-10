import React, { useState } from "react";
import { SHOP_DATA } from "../../data";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";

export default function ShopPage() {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}
