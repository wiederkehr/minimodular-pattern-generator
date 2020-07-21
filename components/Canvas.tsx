/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import React from "react";

const Canvas: React.FC = ({ children }) => (
  <Box
    sx={{
      height: "100%",
      lineHeight: 0,
    }}
  >
    {children}
  </Box>
);

export default Canvas;
