import React from "react";
import NavBar from "../../Components/navbar";

export default function RenderLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
