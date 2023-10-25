import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import {Link} from "@mui/material";

const Navbar = () => {
  const items = [
    { title: "HOME", link: "/" },
    { title: "GALLERY", link: "/gallery" },
    { title: "NEWS", link: "/news" },
    { title: "DEVELOPER BLOG", link: "/blog" },
    { title: "COMMUNITY", link: "/community" },
    { title: "SUPPORT", link: "/support" },
    { title: "BUY", link: "/buy" },
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
        zIndex: 4,
      }}
    >
      {items.map((item) => (
        <Link to={item.lin} style={{ color: "unset", textDecoration: "none" }}>
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
