import React, { useState } from "react";
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

  const [selectedImage, setSelectedImage] = useState(0);
  const [showPreview, toggleShowPreview] = useState(false);

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
        onClick={() => toggleShowPreview(false)}
      />
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          zIndex: 2,
          width: "60%",
          bottom: "2.5%",
          transform: `translate(calc(35% - ${position.x / 50}px), calc(-${position.y / 200}px)) rotateX(${position.y/200}deg) rotateY(${position.x/200}deg)`,

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
            {images.map((item, n) => (
              <CardMedia
                component="img"
                alt=""
                src={item}
                sx={{ width: "280px", m: "0.1rem", cursor:"pointer" }}
                onClick={() => {
                  setSelectedImage(n);
                  toggleShowPreview(true);
                }}

              />
            ))}
          </Box>
          <CardMedia
            component="img"
            alt=""
            src={images[selectedImage]}
            sx={{
              opacity: showPreview ? 1 : 0,
              position: "absolute",
              width: "900px",
              bottom: "50%",
              left: "50%",
              transform: "translate(-50%, 50%)",
              transition: "opacity 0.2s", 
              pointerEvents: showPreview ? "auto" : "none", 
              cursor:"pointer"
            }}
            onClick={() => toggleShowPreview(false)}
          />
        </Animated>
      </Box>
    </Box>
  );
};

export default Gallery;
