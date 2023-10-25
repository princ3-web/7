import React from "react";
import { Box, CardMedia } from "@mui/material";
import image7 from "../assets/images/7.png";

const Gallery = ({}) => {
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
          width: "105%",
          height: "105vh",
          transform: `translateX(calc(+${position.x / 50}px))`,
          transition: "0.5s",
          transitionTimingFunction: "ease-out",
        }}
      />
    </Box>
  );
};

export default Gallery;
