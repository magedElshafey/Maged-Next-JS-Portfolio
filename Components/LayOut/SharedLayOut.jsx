import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
const SharedLayOut = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SharedLayOut;
