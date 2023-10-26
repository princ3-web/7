import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
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
import { grey } from "@mui/material/colors";

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
  const [media, toggleMedia] = useState(false);

  console.log(`rotateX(${(window.innerHeight / 2 - position.y) / 10}deg) 
  rotateY(${-(window.innerWidth / 2 - position.x) / 20}deg)`);

  return (
    <Box sx={{ backgroundColor: grey[900] }}>
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

      <Box sx={{ position: "absolute", display: "flex", top: "60px", left: "300px", zIndex: 5 }}>
        <Typography
          variant="h4"
          color={!media ? grey[100] : grey[500]}
          sx={{ cursor: "pointer", userSelect: "none", textShadow: '1px 1px 12px rgba(0, 0, 0, 1)', }}
          onClick={() => toggleMedia(false)}
        >
          Images
        </Typography>
        <Typography variant="h4" color={grey[100]} sx={{ mx: "0.25rem" }}>
          /
        </Typography>
        <Typography
          variant="h4"
          color={media ? grey[100] : grey[500]}
          sx={{ cursor: "pointer", userSelect: "none", textShadow: '1px 1px 12px rgba(0, 0, 0, 1)', }}
          onClick={() => toggleMedia(true)}
        >
          Trailer
        </Typography>
      </Box>
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
            {!media &&
              images.map((item, n) => (
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
               {media &&
               <Box sx={{zIndex:10, border:"15px solid red"}}>
                <iframe
                title="My YouTube Video"
                width="560px"
                height="315px"
                src="https://www.youtube.com/watch?v=Tsf5Wjb1uAM"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              ></iframe>
              </Box>
              }
              
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

export default Gallery;
