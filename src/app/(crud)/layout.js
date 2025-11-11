import React from "react";
import Navbar from "@/Components/navbar";
export default function CRUDlayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
