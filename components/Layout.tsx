import React from "react";
import Root from "./Root";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => (
  <Root>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Root>
);

export default Layout;
