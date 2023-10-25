import React, {useState} from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import image3 from "../assets/images/3.png";
import { grey } from "@mui/material/colors";

const Home = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  conso

  return (
    <Box>
      <CardMedia component="img" alt="" src={image1} sx={{ width: "100%", height: "100vh" }} />
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
        <Typography variant="h5" color={grey[100]} >
        Available on PlayStation and PC now
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
