import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import { grey } from "@mui/material/colors";

const Home = () => {
  return (
    <Box>
      <CardMedia component="img" alt="" src={image1} sx={{ width: "100%", height: "100vh" }} />
      <Typography variant="h4" color={grey[200]} sx={{ position: "absolute", top: "40%", pl:"" }}>
        Marvel's Spider-Man
      </Typography>
    </Box>
  );
};

export default Home;
