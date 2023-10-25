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

const Home = ({ position }) => {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#94ecbe",
      minSize: 1,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.1,
      maxSpeed: 1,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };

  return (
    <Box sx={{ position: "relative" }}>
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
          filter:"opacity(0.2)"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          zIndex: 3,
          width: "100%",
          height: "100%",
          border: "5px solid red",
        }}
      >
        <ParticleBackground settings={settings} />
      </Box>
      <CardMedia
        component="img"
        alt=""
        src={image6}
        sx={{
          position: "absolute",
          width: "60%",
          zIndex: 2,
          bottom: "10%",
          transform: `translate(calc(40% - ${position.x / 100}px), calc(-${position.y / 100}px))`,
          transition: "0.5s",
          transitionTimingFunction: "ease-out",
        }}
      />
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
