/** @jsx jsx */
import { jsx, Container } from "theme-ui";

const Content = ({ children }) => (
  <Container sx={{ py: 4, px: 3 }}>{children}</Container>
);

export default Content;
