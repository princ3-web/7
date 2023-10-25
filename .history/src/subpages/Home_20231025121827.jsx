import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import { grey } from "@mui/material/colors";

const Home = () => {
  return (
    <Box>
      <CardMedia component="img" alt="" src={image1} sx={{ width: "100%", height: "100vh" }} />
      <Box  sx={{ position: "absolute", top: "30%", pl:"50px" }}>
      <Typography variant="h2" color={grey[200]}>
        Marvel's Spider-Man
      </Typography>
      <Typography variant="h2" color={grey[200]}>
        Avalaible on
      </Typography>
      </Box>
    </Box>
  );
};

export default Home;
