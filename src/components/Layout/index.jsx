import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import QRCode from "./QRCode";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <QRCode />
      <Footer />
    </>
  );
}

export default Layout;
