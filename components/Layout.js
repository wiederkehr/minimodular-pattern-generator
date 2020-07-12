import Root from "../components/Root";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default (props) => (
  <Root>
    <Header />
    <Main>{props.children}</Main>
    <Footer />
  </Root>
);
