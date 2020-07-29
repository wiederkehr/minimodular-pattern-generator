import React from "react";
import Root from "./Root";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => (
  <Root>
    <Header />
    {children}
    <Footer />
  </Root>
);

export default Layout;
