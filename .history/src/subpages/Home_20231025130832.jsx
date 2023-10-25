import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
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
        src={image5}
        sx={{
          position: "relative",
          left: "-2.5%",
          bott: "-5%",
          width: "105%",
          height: "105vh",
          transform: `translate(calc(+${position.x / 200}px), calc(+${position.y / 200}px))`,
          transition: "0.2s",
        }}
      />
      <CardMedia
        component="img"
        alt=""
        src={image4}
        sx={{
          position: "absolute",
          width: "25%",
          zIndex: 2,
          bottom: "0",
          transform: `translate(calc(200% - ${position.x / 200}px), calc(-${position.y / 200}px))`,
          transition: "0.2s",
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
