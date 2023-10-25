import React from "react";
import { Box, CardMedia } from "@mui/material";
import image1 from "../assets/images/1.jpg";

const Home = () => {
  return (
    <Box>
      <CardMedia component="image" alt="" src={image1} sx={image1} sx={{width:"100%",}} />
    </Box>
  );
};

export default Home;
