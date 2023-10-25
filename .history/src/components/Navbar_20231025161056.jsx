import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Navbar = () => {

  const items = [
    { title: "HOME", link: "/" },
    { title: "GALLERY", link: "/gallery" },
    { title: "NEWS", link: "/music" },
    { title: "DEVELOPER BLOG", link: "/blog" },
    { title: "COMMUNITY", link: "/contact" },
    { title: "SUPPORT", link: "/contact" },
    { title: "BUY", link: "/contact" },
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
        <Link to={"/"} style={{ color: "unset", textDecoration: "none" }}>
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
          {item.title}
        </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default Navbar;
