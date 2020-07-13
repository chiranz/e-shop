import React from "react";
import DirectoryMenu from "../../components/directoryMenu/DirectoryMenu";
import { HomepageContainer } from "./Homepage.styled";

export default function HomePage() {
  return (
    <HomepageContainer>
      <DirectoryMenu />
    </HomepageContainer>
  );
}
