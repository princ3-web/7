import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Navbar = () => {
  const items = [
    "HOME",
    "GALLERY",
    "NEWS",
    "DEVELOPER BLOG",
    "COMMUNITY",
    "SUPPORT",
    "BUY",
  ];

  const items = [
    { title: "HOME", link: "/" },
    { title: "GALLERY", link: "/gallery" },
    { title: "Music", link: "/music" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100vw",
        height: "70px",
        pr: "50px",
        boxSizing: "border-box",
        zIndex:4
      }}
    >
      {items.map((item) => (
        <Typography
          fontWeight={"bold"}
          color={grey[500]}
          sx={{
            mr: "1.25rem",
            fontSize: "15px",
            ":hover": {
              color: grey[100],
              cursor: "pointer",
            },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default Navbar;
