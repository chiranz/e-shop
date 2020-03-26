import React from "react";
import MenuItem from "../menuItem/MenuItem";
import { useSelector } from "react-redux";
import { DirectoryMenuContainer } from "./DirectoryMenu.styled";
export default function DirectoryMenu() {
  const { sections } = useSelector(state => state.directory);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
}
