import React from "react";
import { Box, CardMedia } from "@mui/material";
import image7 from "../assets/images/7.png";

const Gallery = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        alt=""
        src={image7}
        sx={{
          position: "relative",
          left: "-2.5%",
          bottom: "5%",
          width: "100%",
          height: "100vh",
          transition: "0.5s",
          transitionTimingFunction: "ease-out",
        }}
      />
    </Box>
  );
};

export default Gallery;
