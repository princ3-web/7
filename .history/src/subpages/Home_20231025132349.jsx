import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.png";
import { grey } from "@mui/material/colors";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  console.log(position.x);

  return (
    <Box onMouseMove={handleMouseMove} sx={{ position: "relative" }}>
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
          transitionTimingFunction:"ease-out"

        }}
      />
      <CardMedia
        component="img"
        alt=""
        src={image6}
        sx={{
          position: "absolute",
          width: "70%",
          zIndex: 2,
          bottom: "15%",
          transform: `translate(calc(50% - ${position.x / 100}px), calc(-${position.y / 100}px))`,
          transition: "0.5s",
          transitionTimingFunction:"ease-out"
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
