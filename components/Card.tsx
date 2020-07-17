/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const Card: React.FC = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "surface",
      // borderRadius: 5,
      boxShadow: "card",
      lineHeight: 0,
      // padding: 3,
    }}
  >
    {children}
  </Box>
);

export default Card;
