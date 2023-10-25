import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import Gallery from "./subpages/Gallery";
import Navbar from "./components/Navbar";
import Subbar from "./components/Subbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto Condensed, sans-serif",
    },
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box onMouseMove={handleMouseMove}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home position={position} />} />
          <Route path="/gallery" element={<Gallery />}  />
        </Routes>
        <Subbar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
