import React from "react";
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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

  document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollRightButton = document.getElementById("scrollRightButton");
  
    scrollRightButton.addEventListener("click", () => {
      scrollContainer.scrollLeft += 100;
    });
  });

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
          position: "absolute",
          zIndex: 2,
          width: "60%",
          bottom: "10%",
        }}
      >
        <Animated>
          <Box
            className="scroll-container"
            sx={{
              display:"flex",
              border:"1px solid re"
              transform: `translate(calc(40% - ${position.x / 100}px), calc(-${
                position.y / 200
              }px))`,
              transition: "1s",
              transitionTimingFunction: "ease-out",
            }}
          >
            {images.map((item) => (
              <CardMedia component="img" alt="" src={item} sx={{width:"1000px"}} />
            ))}
          </Box>
          <ArrowForwardIosIcon sx={{zIndex: 10}} id="scrollRightButton"/>
        </Animated>
      </Box>
    </Box>
  );
};

export default Gallery;