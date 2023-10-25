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
  return <Box sx={{di}}>
    {items.map(item => <Typography>{item}</Typography>)}
  </Box>;
};

export default Navbar;
