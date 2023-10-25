import React from "react";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  const items = [
    "OPTIMISED",
    "GALLERY",
    "FAQ",
    "INDEPENDENT AAA",
    "DEVELOPER BLOG",
    "MENTAL HEALTH SUPPORT",
    "SUPPORT",
    "BUY",
  ];
  return (
    <Box sx={{ display: "flex", position: width:"100vw" }}>
      {items.map((item) => (
        <Typography variant="subtitle1" sx={{mr: "1rem"}}>{item}</Typography>
      ))}
    </Box>
  );
};

export default Navbar;
