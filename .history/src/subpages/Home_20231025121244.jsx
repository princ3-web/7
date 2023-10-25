import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";

const Home = () => {
  return (
    <Box>
      <CardMedia component="img" alt="" src={image1} sx={{ width: "100%", height: "100vh" }} />
      <Typography sx={{position:"absolute"}}>Marvel's Spider-Man</Typography>
    </Box>
  );
};

export default Home;
