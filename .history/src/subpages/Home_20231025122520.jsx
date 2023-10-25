import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.png";
import { grey } from "@mui/material/colors";

const Home = () => {
  return (
    <Box>
      <CardMedia component="img" alt="" src={image1} sx={{ width: "100%", height: "100vh" }} />
      <Box sx={{ display:"flex", flex position: "absolute", top: "30%", pl: "50px" }}>
      <CardMedia component="img" alt="" src={image2} sx={{ width: "80px" }} />
        <Typography variant="h2" color={grey[200]}>
          Marvel's Spider-Man
        </Typography>
        <Typography variant="h4" color={grey[200]}>
          Available on Playstation and PC now
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
