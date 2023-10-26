import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import Animated from "../components/Animated";
import image1 from "../assets/images/19.png";
import { grey } from "@mui/material/colors";

const Buy = ({ position }) => {
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

  console.log(`rotateX(${(window.innerHeight / 2 - position.y) / 10}deg) 
  rotateY(${-(window.innerWidth / 2 - position.x) / 20}deg)`);

  return (
    <Box sx={{backgroundColor:grey[900]}}>
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
          filter: "blur(5px)",

        }}
        onClick={() => toggleShowPreview(false)}
      />
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          zIndex: 2,
          width: "60%",
          left: "20%",
          bottom: "5%",
        }}
      >
        <Animated>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              perspective: "300px",
            }}
          >
            {images.map((item, n) => (
                <CardMedia
                  component="img"
                  alt=""
                  src={item}
                  sx={{
                    width: "260px",
                    m: "0.3rem",
                    cursor: "pointer",
                    transform: `rotateX(${(window.innerHeight / 2 - position.y) / 30}deg) 
                rotateY(${-(window.innerWidth / 2 - position.x) / 60}deg)`,
                    transition: "0.5s",
                    transitionTimingFunction: "ease-out",
                  }}
                  onClick={() => {
                    setSelectedImage(n);
                    toggleShowPreview(true);
                  }}
                />
              
            ))}
          </Box>

          <Box
            sx={{
              position: "absolute",
              perspective: "1000px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: showPreview ? "auto" : "none",
            }}
            onClick={() => toggleShowPreview(false)}
          >
            <CardMedia
              component="img"
              alt=""
              src={images[selectedImage]}
              sx={{
                opacity: showPreview ? 1 : 0,
                width: "900px",
                cursor: "pointer",
                transform: `rotateX(${(window.innerHeight / 2 - position.y) / 30}deg) 
              rotateY(${-(window.innerWidth / 2 - position.x) / 60}deg)`,
                transition: "0.5s",
                transitionTimingFunction: "ease-out",
              }}
            />
          </Box>
        </Animated>
      </Box>
    </Box>
  );
};

export default Buy;
