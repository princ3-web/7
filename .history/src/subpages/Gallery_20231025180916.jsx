import React, {useState} from "react";
import { Box, CardMedia } from "@mui/material";
import Animated from "../components/Animated";
import image1 from "../assets/images/7.png";
import image2 from "../assets/images/8.jpg";
import image3 from "../assets/images/9.jpg";
import image4 from "../assets/images/10.jpg";
import image5 from "../assets/images/11.jpg";
import image6 from "../assets/images/12.jpg";
import image7 from "../assets/images/13.jpg";
import image8 from "../assets/images/14.jpg";
import image9 from "../assets/images/15.jpg";
import image10 from "../assets/images/16.jpg";
import image11 from "../assets/images/17.jpg";
import image12 from "../assets/images/18.jpg";

const Gallery = ({ position }) => {
  const images = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  return (
    <Box>
      <CardMedia
        component="img"
        alt=""
        src={image1}
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
          display: "flex",
          position: "absolute",
          zIndex: 2,
          width: "60%",
          bottom: "2.5%",
          transform: `translate(calc(40% - ${position.x / 100}px), calc(-${position.y / 200}px))`,
          transition: "1s",
          transitionTimingFunction: "ease-out",
        }}
      >
        <Animated>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {images.map((item) => (
              <CardMedia component="img" alt="" src={item} sx={{ width: "280px", m: "0.1rem" }} />
            ))}
          </Box>
          <CardMedia
            component="img"
            alt=""
            src={image1}
            sx={{
              position: "absolute",
              width: "900px",
              bottom: "50%",
              left: "50%",
              transform: "translate(-50%, 50%)",
            }}
          />
        </Animated>
      </Box>
    </Box>
  );
};

export default Gallery;
