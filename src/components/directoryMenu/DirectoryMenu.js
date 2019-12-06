import React, { useState } from "react";
import { SHOP_SECTIONS } from "../../data";
import "./directoryMenu.style.scss";
import MenuItem from "../menuItem/MenuItem";

export default function DirectoryMenu() {
  const [sections, setSections] = useState(SHOP_SECTIONS);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}
