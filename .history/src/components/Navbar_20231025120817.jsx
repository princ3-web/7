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
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        justifyContent: "flex-end",
        alignItems:"center",
        width: "100vw",
        height: "80px",
        pr: "40px",
        boxSizing:"border-box"
      }}
    >
      {items.map((item) => (
        <Typography variant="subtitle2" fontWeight={"bold"} color={grey[500]} sx={{ mr: "1rem" }}>
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default Navbar;
