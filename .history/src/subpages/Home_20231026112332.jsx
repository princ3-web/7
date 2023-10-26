import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.png";
import { grey } from "@mui/material/colors";
import ParticleBackground from "react-particle-backgrounds";
import Animated from "../components/Animated";

const Home = ({ position }) => {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 100,
      color: "rgba(255, 180, 56, 0.8)",
      minSize: 0,
      maxSize: 2,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.1,
      maxSpeed: 2,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 1,
      opacityTransitionTime: 3000,
    },
  };

  return (
    <Box sx={{ position: "relative", backgroundColor:grey[] }}>
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
          filter: "blur(1px)",

        }}
      />
      <Box
        sx={{
          position: "absolute",
          zIndex: 3,
          width: "100%",
          height: "100%",
          bottom: 0,
        }}
      >
        <ParticleBackground settings={settings} />
      </Box>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: "30%",
          pl: "50px",
        }}
      >
        <CardMedia component="img" alt="" src={image3} sx={{ width: "500px" }} />
        <Typography variant="h5" color={grey[100]}>
          Available on PlayStation and PC now
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
