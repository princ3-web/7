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
        alignItems: "center",
        width: "100vw",
        height: "70px",
        pr: "50px",
        boxSizing: "border-box",
        z
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
