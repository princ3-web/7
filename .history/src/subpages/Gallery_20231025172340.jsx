import React from "react";
import { Box, CardMedia } from "@mui/material";
import image7 from "../assets/images/7.png";
import Animated

const Gallery = ({ position }) => {
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
       <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          width: "60%",
          bottom: "10%",
        }}
      >
        <Animated>
          <CardMedia
            component="img"
            alt=""
            src={image6}
            sx={{
              transform: `translate(calc(40% - ${position.x / 200}px), calc(-${
                position.y / 200
              }px))`,
              transition: "0.5s",
              transitionTimingFunction: "ease-out",
            }}
          />
        </Animated>
      </Box>
    </Box>
  );
};

export default Gallery;
