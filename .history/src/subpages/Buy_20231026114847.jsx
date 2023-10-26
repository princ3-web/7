import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import Animated from "../components/Animated";
import image1 from "../assets/images/7.png";
import image2 from "../assets/images/20.png";
import { grey } from "@mui/material/colors";

const Buy = ({ position }) => {
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
      />
      <Box
        sx={{
          display: "flex",

          position: "absolute",
          zIndex: 2,
          width: "80%",
          left: "10%",
          top: "20%",
        }}
      >
        <Animated style={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              perspective: "300px",
            }}
          >
            <CardMedia
              component="img"
              alt=""
              src={image2}
              sx={{
                width: "350px",
                m: "0.3rem",
                cursor: "pointer",
                transform: `rotateX(${(window.innerHeight / 2 - position.y) / 90}deg) 
                rotateY(${-(window.innerWidth / 2 - position.x) / 180}deg)`,
                transition: "0.5s",
                transitionTimingFunction: "ease-out",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="h4"
              color={grey[100]}
              fontWeight={900}
              sx={{ textTransform: "uppercase", ml: "2rem" }}
            >
              Marvel's Spider-Man: GOTY Edition
            </Typography>
            <Typography
              variant="h6"
              color={grey[100]}
              fontWeight={900}
              sx={{ textTransform: "uppercase", ml: "2rem" }}
            >
              Available on PS4, PS5 and PC
            </Typography>
            <Typography
              variant="h3"
              color={grey[100]}
              fontWeight={900}
              sx={{ textTransform: "uppercase", ml: "2rem", mt:"" }}
            >
              Buy Now
            </Typography>
          </Box>
        </Animated>
      </Box>
    </Box>
  );
};

export default Buy;
