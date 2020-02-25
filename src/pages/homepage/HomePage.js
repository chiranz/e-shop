import React from "react";
import "./homepage.style.scss";
import DirectoryMenu from "../../components/directoryMenu/DirectoryMenu";

export default function HomePage(props) {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
}
