/** @jsxImportSource theme-ui */

import React from "react";
import Link from "next/link";
import config from "../site.config";

const Brand: React.FC = () => (
  <Link href="/" passHref>
    <a
      sx={{
        alignItems: "center",
        color: "text",
        display: "flex",
        flexWrap: "nowrap",
        lineHeight: 1,
        padding: 3,
        textDecoration: "none",
        width: "100%",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      aria-label={config.title}
      title={config.title}
    >
    <svg width="24px" height="24px" viewBox="0 0 120 120" version="1.1">
      <title>Minimodular Logo</title>
      <g sx={{fill: "onSurface"}}>
        <circle cx="20" cy="60" r="20"></circle>
        <circle cx="60" cy="100" r="20"></circle>
        <circle cx="60" cy="20" r="20"></circle>
        <circle cx="100" cy="60" r="20"></circle>
      </g>
    </svg>
      <span
        sx={{
          color: "onSurface",
          fontWeight: 600,
          fontSize: 0,
          marginLeft: "1rem",
        }}
      >
        {config.title}
      </span>
    </a>
  </Link>
);

export default Brand;