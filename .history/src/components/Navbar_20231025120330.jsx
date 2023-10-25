import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

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
    <Box sx={{ display: "flex", position:"absolute", width:"100vw" }}>
      {items.map((item) => (
        <Typography variant="subtitle1" color={grey[500]} sx={{mr: "1rem"}}>{item}</Typography>
      ))}
    </Box>
  );
};

export default Navbar;
