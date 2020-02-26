import React from "react";
import "./directoryMenu.style.scss";
import MenuItem from "../menuItem/MenuItem";
import { useSelector } from "react-redux";

export default function DirectoryMenu() {
  const { sections } = useSelector(state => state.directory);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}
