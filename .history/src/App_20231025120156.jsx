import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./subpages/Home";
import About from "./subpages/About";
import Navbar from "./components/Navbar";
import Subbar from "./components/Subbar";

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: "Raleway", 
    },
  });

  return (
    <ThemeProvider theme={theme}></ThemeProvider>

    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Subbar />
    </Box>
  );
}

export default App;