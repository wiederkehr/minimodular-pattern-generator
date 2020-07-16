/** @jsx jsx */
import { jsx, Box } from "theme-ui";

const Card: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "surface",
        borderRadius: 5,
        boxShadow: "card",
        display: "inline-block",
        overflow: "hidden",
        paddingBottom: "100%",
        position: "relative",
        verticalAlign: "middle",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
