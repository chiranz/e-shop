import React from "react";
import "./homepage.style.scss";
import DirectoryMenu from "../../components/directoryMenu/DirectoryMenu";

export default function HomePage() {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
}
