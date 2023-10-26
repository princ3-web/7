import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import Animated from "../components/Animated";
import image1 from "../assets/images/7.png";
import image2 from "../assets/images/20.png";
import image3 from "../assets/images/21.png";
import image4 from "../assets/images/22.png";
import image5 from "../assets/images/23.png";
import { grey } from "@mui/material/colors";
import {Link} from "@mui/material";

const Buy = ({ position }) => {
  const images = [
    {
      image: image3,
      link: "https://store.playstation.com/pl-pl/product/EP9000-CUSA11995_00-000000000MSMGOTY",
    },
    {
      image: image4,
      link: "https://store.playstation.com/pl-pl/product/EP9000-CUSA11995_00-000000000MSMGOTY",
    },
    {
      image: image5,
      link: "https://store.playstation.com/pl-pl/product/EP9000-CUSA11995_00-000000000MSMGOTY",
    },
  ];

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
        <Animated style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
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
          <Box sx={{ ml: "2rem" }}>
            <Typography
              variant="h4"
              color={grey[100]}
              fontWeight={900}
              sx={{ textTransform: "uppercase" }}
            >
              Marvel's Spider-Man: GOTY Edition
            </Typography>
            <Typography
              variant="h6"
              color={grey[100]}
              fontWeight={900}
              sx={{ textTransform: "uppercase" }}
            >
              Available on PS4, PS5 and PC
            </Typography>
            <Box>
              <Typography
                variant="h4"
                color={grey[100]}
                fontWeight={900}
                sx={{
                  textTransform: "uppercase",
                  mt: "2rem",
                  ":hover": { color: grey[500], cursor: "pointer" },
                }}
              >
                Buy Now
              </Typography>
              <Box sx={{ display: "flex", mt: "1rem" }}>
                {images.map((item) => (
                  <Link to={}>
                  <CardMedia
                    component="img"
                    alt=""
                    src={item.image}
                    sx={{
                      width: "35px",
                      height: "35px",
                      m: "0.3rem",
                      cursor: "pointer",
                      transform: `rotateX(${(window.innerHeight / 2 - position.y) / 90}deg) 
                rotateY(${-(window.innerWidth / 2 - position.x) / 180}deg)`,
                      transition: "0.5s",
                      transitionTimingFunction: "ease-out",
                    }}
                  />
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Animated>
      </Box>
    </Box>
  );
};

export default Buy;
